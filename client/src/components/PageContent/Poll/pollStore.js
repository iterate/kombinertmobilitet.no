import { Listenable } from 'pockito';
import REQ from 'util/REQ';
import firebase from 'firebase/app';

const uuid = poll => `${poll._id}.${poll._rev}`;
const idByKey = snap => Object.keys(snap).map(key => ({ id: key, ...snap[key] }));

const store = new Listenable();

// localStorage sync to remember which polls were answered on previous visits in this browser
const storage = {
  checkIfPollWasAnswered(poll) {
    const storeKnows = getStateFor(poll).submitAnswerAsync.req === REQ.SUCCESS;

    if (storeKnows) {
      return;
    }

    function getAnswerText() {
      try {
        return window.localStorage.getItem(uuid(poll));
      } catch (e) {
        // Could not read from localStorage
        return true; // Don't let users without localStorage submit answers, just show statistics
      }
    }

    const answerText = getAnswerText();

    if (answerText) {
      store.set({
        [uuid(poll)]: {
          ...store[uuid(poll)],
          submitAnswerAsync: { req: REQ.SUCCESS, answerText: answerText }
        }
      });
    }
  },
  setIsAnswered(poll, answer) {
    try {
      window.localStorage.setItem(uuid(poll), answer.text);
    } catch (e) {
      // Could not write to localStorage
    }
  },
};

// Listening
export function addListener(poll, listener) {
  store.addListener(listener, uuid(poll));
  storage.checkIfPollWasAnswered(poll);
}
export function removeListener(poll, listener) {
  store.removeListener(listener, uuid(poll));
}

// Selector
export function getStateFor(poll) {
  const {
    prevAnswersAsync = { req: REQ.INIT },
    submitAnswerAsync = { req: REQ.INIT },
  } = store[uuid(poll)] || {};

  return {
    prevAnswersAsync,
    submitAnswerAsync,
  };
}

// Async actions
export function syncSubmittedAnswers(poll) {

  const update = (obj) => store.set({
    [uuid(poll)]: {
      ...store[uuid(poll)],
      prevAnswersAsync: obj
    }
  });

  update({ req: REQ.PENDING });

  firebase
    .database()
    .ref('polls')
    .child(poll._id)
    .child(poll._rev)
    .on('value', (snap) => {
      const allEntries = idByKey(snap.val() || {});
      const aggregated =
        allEntries
          .reduce((map, answer) => {
            if (map[answer.text]) {
              map[answer.text]++;
            } else {
              map[answer.text] = 1;
            }
            return map;
          }, {});

      update({
        req: REQ.SUCCESS,
        answerMap: aggregated,
      });
    });
}
export function unSyncSubmittedAnswers(poll) {

  firebase
    .database()
    .ref('polls')
    .child(poll._id)
    .child(poll._rev)
    .off('value');
}

export function submitAnswer(poll, answer) {

  const update = (obj) => store.set({
    [uuid(poll)]: {
      ...store[uuid(poll)],
      submitAnswerAsync: obj
    }
  });

  update({ req: REQ.PENDING });

  firebase
    .database()
    .ref('polls')
    .child(poll._id)
    .child(poll._rev)
    .push(answer)
    .then(
      () => {
        update({ req: REQ.SUCCESS, answerText: answer.text });
        storage.setIsAnswered(poll, answer);
      },
      (error) => {
        update({ req: REQ.ERROR })
        console.error(`error`, error);
      },
    );
}

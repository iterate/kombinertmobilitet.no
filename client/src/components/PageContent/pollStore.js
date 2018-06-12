import { Listenable } from 'pockito';
import REQ from 'util/REQ';
import firebase from 'firebase/app';
import 'firebase/database';

const uuid = poll => `${poll._id}.${poll._rev}`;
const idByKey = snap => Object.keys(snap).map(key => ({ id: key, ...snap[key] }));

const store = new Listenable({
  // uniValidator: shape({
  //   prevAnswersAsync: shape({
  //     req: oneOf(Object.values(REQ)),
  //     answers: arrayOf(shape({

  //     }))
  //   })
  //   submitAsync:
  // }),
});

// localStorage sync to remember which polls were answered on previous visits in this browser
const storage = {
  checkIfPollWasAnswered(poll) {
    const storeKnows = getStateFor(poll).submitAnswerAsync.req === REQ.SUCCESS;

    if (storeKnows) {
      return;
    }

    function isAnswered() {
      try {
        return window.localStorage.getItem(uuid(poll));
      } catch (e) {
        // Could not read from localStorage
        return true; // Don't let users without localStorage submit answers, just show statistics
      }
    }

    if (isAnswered()) {
      store.set({
        [uuid(poll)]: {
          ...store[uuid(poll)],
          submitAnswerAsync: { req: REQ.SUCCESS }
        }
      });
    }
  },
  setIsAnswered(poll) {
    try {
      window.localStorage.setItem(uuid(poll), true);
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
    .on('value', (snap) => {
      const allEntries = idByKey(snap.val() || {});
      const aggregated =
        allEntries
          .filter(entry => entry._rev === poll._rev)
          .reduce((map, entry) => {
            if (map[entry.answer.text]) {
              map[entry.answer.text]++;
            } else {
              map[entry.answer.text] = 1;
            }
            return map;
          }, {});

      update({
        req: REQ.SUCCESS,
        answerMap: aggregated,
      });
      storage.setIsAnswered(poll);
    });
    // TODO REQ.ERROR ?
}
export function unSyncSubmittedAnswers(poll) {

  firebase
    .database()
    .ref('polls')
    .child(poll._id)
    .off('value');
}

export function submitAnswer(poll, answer) {

  const update = (obj) => store.set({
    [uuid(poll)]: {
      ...store[uuid(poll)],
      submitAnswerAsync: obj
    }
  });

  firebase
    .database()
    .ref('polls')
    .child(poll._id)
    .push({
      _rev: poll._rev,
      answer: answer
    })
    .then(
      () => {
        update({ req: REQ.SUCCESS })
      },
      (error) => {
        update({ req: REQ.ERROR })
        console.error(`error`, error);
      },
    );
}

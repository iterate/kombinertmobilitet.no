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

// Listening
export function addListener(poll, listener) {
  store.addListener(listener, uuid(poll));
}
export function removeListener(poll, listener) {
  store.removeListener(listener, uuid(poll));
}

// Selector
export function getStateFor(poll) {
  return store[uuid(poll)] || {
    prevAnswersAsync: { req: REQ.INIT },
    submitAnswerAsync: { req: REQ.INIT },
  };
}

// Async actions
export function syncSubmittedAnswers(poll) {
  console.log(`sync:`, uuid(poll)); // DEBUG

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
      const allAnswers = idByKey(snap.val() || {});
      const aggregated =
        allAnswers
          .filter(ans => ans._rev === poll._rev)
          .reduce((map, ans) => {
            if (map[ans.text]) {
              map[ans.text]++;
            } else {
              map[ans.text] = 1;
            }
            return map;
          }, {});

      update({
        req: REQ.SUCCESS,
        answerMap: aggregated,
      });
    });
    // TODO REQ.ERROR ?
}
export function unSyncSubmittedAnswers(poll) {
  console.log(`unsync:`, uuid(poll)); // DEBUG

  firebase
    .database()
    .ref('polls')
    .child(poll._id)
    .off('value');
}

export function submitAnswer(poll, answer) {
  console.log(`submit:`, uuid(poll), answer); // DEBUG

  const update = (obj) => store.set({
    [uuid(poll)]: {
      ...store[uuid(poll)],
      prevAnswersAsync: obj
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

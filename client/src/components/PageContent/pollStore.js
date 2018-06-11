import { Listenable } from 'pockito';
import REQ from 'util/REQ';

const uuid = poll => `${poll._key}.${poll._rev}`;

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
}
export function unSyncSubmittedAnswers(poll) {
  console.log(`unsync:`, uuid(poll)); // DEBUG
}

export function submitAnswer(poll, answer) {
  console.log(`submit:`, uuid(poll), answer); // DEBUG
}

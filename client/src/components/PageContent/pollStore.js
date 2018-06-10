import { Listenable } from 'pockito';
import REQ from 'util/REQ';
import sanity from 'sanity';

const store = new Listenable({
  pollAsyncs: {},
  submitAsyncss: {},
});

export { store as pollStore };

// Selectors
export function getPollAsync(pollId) {
  return store.pollAsyncs[pollId] || { req: REQ.INIT };
}
export function getSubmitAsync(pollId) {
  return store.submitAsyncs[pollId] || { req: REQ.INIT };
}

// Async actions
export function fetchPoll(pollId) {
  const update = obj => store.set({
    pollAsyncs: {
      ...store.pollAsyncs,
      [pollId]: obj,
    },
  });

  update({ req: REQ.PENDING });

  sanity
    .fetch(`*[_type == 'pollPage' && _id == '${pollId}'][0]`)
    .then(
      response => {
        response
          ? update({ req: REQ.SUCCESS, poll: response })
          : update({ req: REQ.ERROR });
      },
      error => {
        update({ req: REQ.ERROR });
      },
    )
}

export function submitAnswer(pollId, answer) {
  const update = obj => store.set({
    submitAsyncs: {
      ...store.submitAsyncs,
      [pollId]: obj,
    },
  });

  update({ req: REQ.PENDING });

  sanity
    .transaction()
    .patch(pollId, p => p.set({ question: 'Hva synes du er gøy?' }))
    .commit()
    .then(
      response => {
        update({ req: REQ.SUCCESS });
        console.log('Success:', response);
      },
      error => {
        update({ req: REQ.ERROR });
        console.error('Error:', error);
      }
    );
}

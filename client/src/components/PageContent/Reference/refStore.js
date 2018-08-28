import { Listenable } from 'pockito';
import REQ from 'util/REQ';
import sanity from 'sanity';

const store = new Listenable({});

export { store as refStore };

// Selector
export function getDocumentAsync(_ref) {
  return store[_ref] || { req: REQ.INIT };
}

// Async action
export function fetchDocument(_ref) {
  const update = (obj) => store.set({
    [_ref]: obj
  });

  update({ req: REQ.PENDING });

  sanity
    .fetch(`*[_id == '${_ref}'][0]`)
    .then(
      doc => {
        !!doc
          ? update({ req: REQ.SUCCESS, doc })
          : update({ req: REQ.ERROR })
      },
      error => {
        update({ req: REQ.ERROR });
      },
    );
}

import { Listenable } from 'pockito';
import sanity from 'sanity';
import REQ from 'util/REQ';

const store = new Listenable({
  initialState: {
    contentAsync: {
      req: REQ.INIT,
      content: void 0,
    },
  },
});

export { store as appStore };

function apiCall() {
  return sanity.fetch(
    `*[_type == 'website'] | [0] {
      introChapters[]->{
        pages[],
      },
      summaryChapters[]->{
        pages[],
      },
      experimentChapters[]->{
        experiments[]->{
          menuTitle,
          fullTitle,
          slug,
          type,
          period,
          dataSetSize,
          misc[]{
            key,
            value,
          },
          pages[],
        },
      },
    }`
  );
}

export function fetchContent() {
  const update = obj => store.set({ contentAsync: obj });

  update({ req: REQ.PENDING });

  apiCall().then(
    content => {
      (content && Object.keys(content).length > 0)
        ? update({ req: REQ.SUCCESS, content })
        : update({ req: REQ.ERROR });
    },
    error => {
      update({ req: REQ.ERROR });
    },
  );
}

import { Listenable, Validators } from 'pockito';
import * as snapScroll from 'snapScroll';

const { objectOf } = Validators;

const domNode = () => true; // How to validate?

const store = new Listenable({
  nodeMap: objectOf(domNode)
});

export { store as hashStore };

export const hashify = (slug, index = 0) => `${slug.current}-${index}`;

export function setHashedNode(hash, node) {
  store.set({
    nodeMap: {
      ...store.nodeMap,
      [hash]: node
    },
  });
}

snapScroll.enable();

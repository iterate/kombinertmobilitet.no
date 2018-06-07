import ReactDOM from 'react-dom';
import { hashStore } from './hashStore';

const ascending = (compareFn) => (one, two) => compareFn(one) - compareFn(two);
const absScollOffset = (node) => Math.abs(node.getBoundingClientRect().y);
const getKeyIn = object => value => Object.keys(object).find(key => object[key] === value);

let timeout;

export function enable() {
  window.addEventListener('scroll', onScroll);
}

export function disable() {
  window.removeEventListener('scroll', onScroll);
}

function onScroll() {
  clearTimeout(timeout);
  timeout = setTimeout(onScrollEnd, 200);
}

function onScrollEnd() {
  scrollToClosest();
}

function scrollToClosest() {
  Object.values(hashStore.nodeMap)
    .filter(Boolean)
    .map(ReactDOM.findDOMNode)
    .sort(ascending(absScollOffset))
    .slice(0, 1)
    .forEach(closestPage => {
      closestPage.scrollIntoView({ block: 'start', behavior: 'smooth' });
      window.location.hash = getKeyIn(hashStore.nodeMap)(closestPage);
    });
}

import ReactDOM from 'react-dom';
import { hashStore } from './hashStore';

const ascending = (compareFn) => (one, two) => compareFn(one) - compareFn(two);
const absScollOffset = (node) => Math.abs(node.getBoundingClientRect().y);
const getKeyIn = object => value => Object.keys(object).find(key => object[key] === value);

const byScrollDirection = () => {
  const scrollDiff = window.pageYOffset - scrollStart;

  if (scrollDiff < 0) {
    return node => node.getBoundingClientRect().y <= 0;
  } else if (scrollDiff > 0) {
    return node => node.getBoundingClientRect().y >= 0;
  } else {
    return () => true;
  }
}

export function enable() {
  window.addEventListener('scroll', onScroll);
}

export function disable() {
  window.removeEventListener('scroll', onScroll);
}

let timeout;
let scrollStart;

function onScroll() {
  clearTimeout(timeout);
  timeout = setTimeout(onScrollEnd, 200);

  if (scrollStart === void 0) {
    scrollStart = window.pageYOffset;
  }
}

function onScrollEnd() {
  scrollToClosest();
  scrollStart = void 0;
}

function scrollToClosest() {
  Object.values(hashStore.nodeMap)
    .filter(Boolean)
    .map(ReactDOM.findDOMNode)
    .filter(byScrollDirection())
    .sort(ascending(absScollOffset))
    .slice(0, 1)
    .forEach(closestPage => {
      closestPage.scrollIntoView({ block: 'start', behavior: 'smooth' });

      const hash = getKeyIn(hashStore.nodeMap)(closestPage);

      if (hash) {
        window.location.hash = hash;
      }
    });
}

import React from 'react';
import { Link } from './GoToNext.style.js';

const isActive = (chapter) => `${chapter.slug.current}-0` === window.location.hash.split('#')[1];
const following = (valid) => (_, index, array) => {
  if (index === 0) return false;

  const previous = array[index-1];

  return valid(previous);
}

export default class GoToNext extends React.Component {

  getNext() {
    const { openExperimentChapter = void 0 } = this.props;

    if (openExperimentChapter) {
      return openExperimentChapter
        .experiments
        .find(following(isActive));

    } else {
      const { introChapters, experimentChapters, summaryChapters } = this.props.pageContent;

      return []
        .concat(introChapters)
        .concat(experimentChapters)
        .concat(summaryChapters)
        .find(following(isActive));
    }
  }
  render() {
    const next = this.getNext();

    if (!next) {
      return false;
    }

    return (
      <Link to={`#${next.slug.current}-0`}>
        ↓ Videre
      </Link>
    );
  }
}

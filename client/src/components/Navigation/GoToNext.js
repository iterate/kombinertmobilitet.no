import React from 'react';
import { Link } from './GoToNext.style.js';

const flatten = (arr, next) => arr.concat(next);

const isActiveHash = (hash) => hash === window.location.hash.split('#')[1];
const following = (valid) => (_, index, array) => {
  if (index === 0) return false;

  const previous = array[index-1];

  return valid(previous);
}

export default class GoToNext extends React.Component {

  getNextHash() {
    const { openExperimentChapter = void 0 } = this.props;

    if (openExperimentChapter) {
      return openExperimentChapter
        .experiments
        .map(experiment => (experiment.pages || []).map((_, index) => `${experiment.slug.current}-${index}`))
        .reduce(flatten, [])
        .find(following(isActiveHash));

    } else {
      const { introChapters, experimentChapters, summaryChapters } = this.props.pageContent;

      return []
        .concat(
          introChapters
            .map(chapter => chapter.pages.map((_, index) => `${chapter.slug.current}-${index}`))
            .reduce(flatten, [])
        )
        .concat(
          experimentChapters
            .map(chapter => `${chapter.slug.current}-0`)
        )
        .concat(
          summaryChapters
            .map(chapter => chapter.pages.map((_, index) => `${chapter.slug.current}-${index}`))
            .reduce(flatten, [])
        )
        .find(following(isActiveHash));
    }
  }
  render() {
    const nextHash = this.getNextHash();

    if (!nextHash) {
      return false;
    }

    return (
      <Link to={`#${nextHash}`} color={this.props.color}>
        ↓ Videre
      </Link>
    );
  }
}

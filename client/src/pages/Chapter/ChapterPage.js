import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
import Navigation from 'components/Navigation';
import ExperimentSubChapter from 'Chapter/Experiment/Sub';

import { appStore } from 'appStore';

const ascending = (compareFn) => (one, two) => compareFn(one) - compareFn(two);
const absScollOffset = (node) => Math.abs(node.getBoundingClientRect().y);

export default class ChapterPage extends React.Component {
  nodes = []

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }
  onScroll = () => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.onScrollEnd, 200);
  }
  onScrollEnd = () => {
    Object.values(this.nodes)
      .filter(Boolean)
      .map(ReactDOM.findDOMNode)
      .sort(ascending(absScollOffset))
      .slice(0, 1)
      .forEach(closestPage => closestPage.scrollIntoView({ block: 'start', behavior: 'smooth' }));
  }

  render() {
    const { content } = appStore.contentAsync;
    const { params } = this.props.match;

    const chapter = 
      content.experimentChapters
        .find(chapter => chapter.slug.current === params.chapterSlug);

    if (!chapter) {
      return;
    }

    return (
      <Fragment>
        <Navigation pageContent={content} openExperimentChapter={chapter} />
        {chapter.experiments.map(experiment =>
          <ExperimentSubChapter
            key={experiment._key}
            experiment={experiment}
            nodes={this.nodes}
          />
        )}
      </Fragment>
    );
  }
}

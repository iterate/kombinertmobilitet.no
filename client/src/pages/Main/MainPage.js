import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
import Navigation from 'components/Navigation';
import Chapter from 'Chapter';

import { appStore } from 'appStore';

const ascending = (compareFn) => (one, two) => compareFn(one) - compareFn(two);
const absScollOffset = (node) => Math.abs(node.getBoundingClientRect().y);

export default class MainPage extends React.Component {

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

    return (
      <Fragment>
        <Navigation pageContent={content} />
        {content.introChapters.map(chapter =>
          <Chapter.Intro key={chapter._id} chapter={chapter} nodes={this.nodes} />
        )}
        {content.experimentChapters.map((chapter, index) =>
          <Chapter.Experiment key={chapter._id} index={index} chapter={chapter} nodes={this.nodes} />
        )}
        {content.summaryChapters.map(chapter =>
          <Chapter.Summary key={chapter._id} chapter={chapter} nodes={this.nodes} />
        )}
      </Fragment>
    );
  }
}

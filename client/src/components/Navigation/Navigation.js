import React, { Fragment } from 'react';
import * as N from './Navigation.style.js';

const isActiveExact = (chapter) => chapter.slug.current === window.location.hash.replace('#', '');
const isActive = (chapter) => chapter.slug.current === window.location.hash.replace('#', '').split('/')[0];
const isActiveSub = (chapter, subChapter) => isActive(chapter) && subChapter.slug.current === window.location.hash.split('/')[1];

export default class Navigation extends React.Component {

  componentDidMount() {
    window.addEventListener('hashchange', this.onChange);
  }
  componentWillUnmount() {
    window.removeEventListener('hashchange', this.onChange);
  }
  onChange = () => {
    this.forceUpdate();
  }

  goTo = (chapter) => () => {
    window.location.hash = chapter.slug.current;
  }

  goToSub = (chapter, subChapter) => () => {
    window.location.hash = chapter.slug.current + '/' + subChapter.slug.current;
  }

  render() {
    const { introChapters, experimentChapters, summaryChapters } = this.props.pageContent;

    return (
      <N.Navigation isAtSummary={summaryChapters.some(isActive)}>
        {introChapters.map(chapter => {
          return (
            <N.Link
              key={chapter._id}
              className={isActive(chapter) ? 'active' : ''}
              onClick={this.goTo(chapter)}
            >
              {chapter.menuTitle}
            </N.Link>
          );
        })}
        <br />
        {experimentChapters.map(chapter => {
          return (
            <Fragment key={chapter._id}>
              <N.Link
                className={isActiveExact(chapter) ? 'active' : ''}
                onClick={this.goTo(chapter)}
              >
                {chapter.menuTitle}
              </N.Link>
              {isActive(chapter) && chapter.experiments && chapter.experiments.map(subChapter => {
                return (
                  <N.Link
                    key={subChapter._key}
                    className={isActiveSub(chapter, subChapter) ? 'active' : ''}
                    onClick={this.goToSub(chapter, subChapter)}
                    isSubChapter={true}
                  >
                    {subChapter.menuTitle}
                  </N.Link>
                );
              })}
            </Fragment>
          );
        })}
        <br />
        {summaryChapters.map(chapter => {
          return (
            <N.Link
              key={chapter._id}
              className={isActive(chapter) ? 'active' : ''}
              onClick={this.goTo(chapter)}
            >
              {chapter.menuTitle}
            </N.Link>
          );
        })}
      </N.Navigation>
    );
  }
}

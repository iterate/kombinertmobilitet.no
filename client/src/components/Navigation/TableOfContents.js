import React, { Fragment } from 'react';
import * as N from './TableOfContents.style.js';

const isActive = (chapter) => `${chapter.slug.current}-0` === window.location.hash.split('#')[1];

export default class TableOfContents extends React.Component {

  componentDidMount() {
    window.addEventListener('hashchange', this.onChange);
  }
  componentWillUnmount() {
    window.removeEventListener('hashchange', this.onChange);
  }
  onChange = () => {
    this.forceUpdate();
  }

  linkTo = (chapter) => {
    return `/#${chapter.slug.current}-0`;
  }

  linkToSub = (chapter, subChapter) => {
    return `/${chapter.slug.current}#${subChapter.slug.current}-0`;
  }

  render() {
    const { introChapters, experimentChapters, summaryChapters } = this.props.pageContent;
    const { openExperimentChapter = void 0 } = this.props;

    return (
      <N.Navigation isAtSummary={summaryChapters.some(isActive)}>
        {introChapters.map(chapter => {
          return (
            <N.Link
              key={chapter._id}
              to={this.linkTo(chapter)}
              className={isActive(chapter) ? 'active' : ''}
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
              to={this.linkTo(chapter)}
                className={isActive(chapter) ? 'active' : ''}
              >
                {chapter.menuTitle}
              </N.Link>
              {chapter === openExperimentChapter && chapter.experiments && chapter.experiments.map(subChapter => {
                return (
                  <N.Link
                    key={subChapter._key}
                    to={this.linkToSub(chapter, subChapter)}
                    className={isActive(subChapter) ? 'active subchapter' : 'subchapter'}
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
              to={this.linkTo(chapter)}
              className={isActive(chapter) ? 'active' : ''}
            >
              {chapter.menuTitle}
            </N.Link>
          );
        })}
      </N.Navigation>
    );
  }
}

import { Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
import * as N from './TableOfContents.style.js';

const slugName = () => window.location.hash.split('#').slice(-1)[0].split('-').slice(0, -1).join('-');
const isActive = (chapter) => chapter.slug.current === slugName();

export default class TableOfContents extends React.Component {

  componentDidMount() {
    window.addEventListener('hashchange', this.onChange);
    window.addEventListener('scroll', this.onChange);
  }
  componentWillUnmount() {
    window.removeEventListener('hashchange', this.onChange);
    window.removeEventListener('scroll', this.onChange);
  }
  onChange = () => {
    this.forceUpdate();
  }

  height = 300
  onRef = (_node) => {
    const node = ReactDOM.findDOMNode(_node);
    this.height = node ? node.offsetHeight : 300;
  }
  getTopStyle() {
    const maxScroll = document.body.offsetHeight - window.innerHeight;
    const scrollProgress = window.scrollY / maxScroll;
    const minY = 38;
    const maxY = window.innerHeight - this.height - minY - 28;

    return {
      top: `${minY + scrollProgress * maxY}px`,
      transition: 'top 200ms linear'
    };
  }
  getMergedStyle() {
    const { transition: topTransition, ...topStyle } = this.getTopStyle();
    const { transition: colorTransition, ...colorStyle } = this.props.style;

    return {
      ...colorStyle,
      ...topStyle,
      transition: `${topTransition}, ${colorTransition}`,
    };
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

    if (window.location.hash.replace('#') === '' && introChapters[0]) {
      return <Redirect to={`#${introChapters[0].slug.current}-0`} />;
    }

    return (
      <N.Navigation
        style={this.getMergedStyle()}
        ref={this.onRef}
      >
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

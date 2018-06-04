import React, { Fragment } from 'react';
import * as N from './Navigation.style.js';

const isActive = (chapter) => chapter.slug.current === window.location.hash.replace('#', '');

export default class Navigation extends React.Component {

  goTo = (chapter) => () => {
    window.location.hash = chapter.slug.current;
  }

  render() {
    const { introChapters, experimentChapters, summaryChapters } = this.props.pageContent;

    let cameBeforeActive = true;

    return (
      <N.Navigation isAtSummary={false/*TODO*/}>
        {introChapters.map(chapter => {
          const active = isActive(chapter);
          const alreadyRead = !active && cameBeforeActive;

          if (active) {
            cameBeforeActive = false;
          }

          return (
            <N.Link
              key={chapter._id}
              active={active}
              alreadyRead={alreadyRead}
              onClick={this.goTo(chapter)}
            >
              {chapter.menuTitle}
            </N.Link>
          );
        })}
        <br />
        {experimentChapters.map(chapter => {
          const active = isActive(chapter);
          const alreadyRead = !active && cameBeforeActive;

          if (active) {
            cameBeforeActive = false;
          }

          return (
            <Fragment key={chapter._id}>
              <N.Link
                active={active}
                alreadyRead={alreadyRead}
                onClick={this.goTo(chapter)}
              >
                {chapter.menuTitle}
              </N.Link>
              {active && chapter.experiments && chapter.experiments.map(subChapter => {
                const active = isActive(chapter);
                const alreadyRead = !active && cameBeforeActive;

                if (active) {
                  cameBeforeActive = false;
                }

                return (
                  <N.Link
                    key={subChapter._key}
                    active={active}
                    alreadyRead={alreadyRead}
                    onClick={this.goTo(chapter)}
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
          const active = isActive(chapter);
          const alreadyRead = !active && cameBeforeActive;

          if (active) {
            cameBeforeActive = false;
          }

          return (
            <N.Link
              key={chapter._id}
              active={active}
              alreadyRead={alreadyRead}
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

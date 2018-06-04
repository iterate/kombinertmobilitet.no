import React, { Fragment } from 'react';
import * as N from './Navigation.style.js';

const active = true;

export default class Navigation extends React.Component {

  goTo = (chapter) => () => {
    window.location.hash = chapter.slug.current;
  }

  render() {
    const { introChapters, experimentChapters, summaryChapters } = this.props.pageContent;

    return (
      <N.Navigation isAtSummary={false/*TODO*/}>
        {introChapters.map(chapter =>
          <N.Link
            key={chapter._id}
            active={false/*TODO*/}
            passed={false/*TODO*/}
            onClick={this.goTo(chapter)}
          >
            {chapter.menuTitle}
          </N.Link>
        )}
        <br />
        {experimentChapters.map(chapter =>
          <Fragment key={chapter._id}>
            <N.Link
              active={false/*TODO*/}
              passed={false/*TODO*/}
              onClick={this.goTo(chapter)}
            >
              {chapter.menuTitle}
            </N.Link>
            {active && chapter.experiments && chapter.experiments.map(subChapter =>
              <N.Link
                key={subChapter._key}
                active={false/*TODO*/}
                passed={false/*TODO*/}
                onClick={this.goTo(chapter)}
                isSubChapter={true}
              >
                {subChapter.menuTitle}
              </N.Link>
            )}
          </Fragment>
        )}
        <br />
        {summaryChapters.map(chapter =>
          <N.Link
            key={chapter._id}
            active={false/*TODO*/}
            passed={false/*TODO*/}
            onClick={this.goTo(chapter)}
          >
            {chapter.menuTitle}
          </N.Link>
        )}
      </N.Navigation>
    );
  }
}

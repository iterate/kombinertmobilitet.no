import React, { Fragment } from 'react';
import * as N from './Navigation.style.js';

const active = true;

export default class Navigation extends React.Component {
  render() {
    const { introChapters, experimentChapters, summaryChapters } = this.props.pageContent;

    return (
      <N.Navigation isAtSummary={false/*TODO*/}>
        {introChapters.map(chapter =>
          <N.Link
            key={chapter._key}
            active={false/*TODO*/}
            passed={false/*TODO*/}
          >
            {chapter.menuTitle}
          </N.Link>
        )}
        <br />
        {experimentChapters.map(chapter =>
          <Fragment>
            <N.Link
              key={chapter._key}
              active={false/*TODO*/}
              passed={false/*TODO*/}
            >
              {chapter.menuTitle}
            </N.Link>
            {active && chapter.experiments && chapter.experiments.map(subChapter =>
              <N.Link
                key={subChapter._key}
                active={false/*TODO*/}
                passed={false/*TODO*/}
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
            key={chapter._key}
            active={false/*TODO*/}
            passed={false/*TODO*/}
          >
            {chapter.menuTitle}
          </N.Link>
        )}
      </N.Navigation>
    );
  }
}

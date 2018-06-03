import React from 'react';
import { Chapter, Page } from '../Chapter.style.js';
import PageContent from 'components/PageContent';

export default class IntroChapter extends React.Component {
  render() {
    const { chapter } = this.props;

    return (
      <Chapter className="intro">
        {chapter.pages.map((page, index) =>
          <Page key={page._key}>
            { index === 0 &&
              <Chapter.Title>{chapter.fullTitle}</Chapter.Title>
            }
            <PageContent page={page} />
          </Page>
        )}
      </Chapter>
    );
  }
}

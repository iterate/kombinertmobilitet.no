import React from 'react';
import { Chapter, Page } from '../Chapter.style.js';
import PageContent from 'components/PageContent';

console.debug(`PageContent`, PageContent); // DEBUG

export default class IntroChapter extends React.Component {
  render() {
    const { chapter } = this.props;

    return (
      <Chapter intro>
        {chapter.pages.map((page, index) => console.debug(`page:`, page) ||
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

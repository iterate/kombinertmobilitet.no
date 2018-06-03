import React from 'react';
import {
  Chapter,
  Page,
} from './Intro.style.js';
import PageContent from './PageContent';

export default class IntroChapter extends React.Component {
  render() {
    const { chapter } = this.props;

    return (
      <Chapter>
        {chapter.pages.map((page, index) => console.debug(`page.content:`, page.content) ||
          <Page>
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

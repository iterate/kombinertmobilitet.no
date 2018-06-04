import React from 'react';
import { withScroll } from '../withScroll.js'
import { Chapter, Page } from '../Chapter.style.js';
import PageContent from 'components/PageContent';

class SummaryChapter extends React.Component {
  render() {
    const { chapter } = this.props;

    return (
      <Chapter className="summary">
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

export default withScroll(SummaryChapter);

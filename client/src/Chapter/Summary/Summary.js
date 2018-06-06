import React from 'react';
import { withScroll } from '../withScroll.js'
import { Chapter, PageWrapper, Page } from '../Chapter.style.js';
import PageContent from 'components/PageContent';

class SummaryChapter extends React.Component {
  render() {
    const { chapter } = this.props;

    return (
      <Chapter
        className="summary"
        ref={node => this.props.nodes[chapter.slug.current] = node}
      >
        {chapter.pages.map((page, index) =>
          <PageWrapper key={page._key}>
            <Page>
              { index === 0 &&
                <Chapter.Title>{chapter.fullTitle}</Chapter.Title>
              }
              <PageContent page={page} />
            </Page>
          </PageWrapper>
        )}
      </Chapter>
    );
  }
}

export default withScroll(SummaryChapter);

import React from 'react';
import { Chapter } from '../Chapter.style.js';
import Page from '../Page';
import PageContent from 'components/PageContent';

class SummaryChapter extends React.Component {
  render() {
    const { chapter } = this.props;

    return (
      <Chapter className="summary">
        {chapter.pages.map((page, index) =>
          <Page
            hash={`${chapter.slug.current}-${index}`}
            key={page._key}
            backgroundColor={page._type === 'reference' ? 'var(--butterscotch)' : ''}
            >
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

export default SummaryChapter;

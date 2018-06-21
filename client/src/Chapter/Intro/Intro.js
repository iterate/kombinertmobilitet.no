import { appStore } from 'appStore';

import React from 'react';
import { Chapter, FlexRow } from '../Chapter.style.js';
import Page from '../Page.js';
import PageContent from 'components/PageContent';
import Info from '../Info';

class IntroChapter extends React.Component {

  render() {
    const { chapter, index: chapterIndex } = this.props;
    const { info: projectInfo } = appStore.contentAsync.content;

    return (
      <Chapter className="intro">
        {chapter.pages.map((page, index) =>
          <Page
            hash={`${chapter.slug.current}-${index}`}
            key={page._key}
            isFirstPage={chapterIndex === 0 && index === 0}
            backgroundColor={page._type === 'reference' ? 'var(--butterscotch)' : ''}
          >
            { index === 0 &&
              <Chapter.Title>{chapter.fullTitle}</Chapter.Title>
            }
            <FlexRow>
              { index === 0 &&
                <Info info={projectInfo} />
              }
              <PageContent page={page} />
            </FlexRow>
          </Page>
        )}
      </Chapter>
    );
  }
}

export default IntroChapter;

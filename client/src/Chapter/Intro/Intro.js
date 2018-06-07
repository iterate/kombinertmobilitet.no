import React from 'react';
import { Chapter } from '../Chapter.style.js';
import Page from '../Page.js';
import PageContent from 'components/PageContent';

class IntroChapter extends React.Component {

  render() {
    const { chapter } = this.props;

    return (
      <Chapter
        className="intro"
        ref={node => this.props.nodes[chapter.slug.current] = node}
      >
        {chapter.pages.map((page, index) =>
          <Page
            hash={`${chapter.slug.current}-${index}`}
            key={page._key}
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

export default IntroChapter;

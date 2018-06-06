import React from 'react';
import { withScroll } from '../withScroll';
import { Chapter, PageWrapper, Page } from '../Chapter.style.js';
import PageContent from 'components/PageContent';

class ExperimentSubChapter extends React.Component {
  render() {
    const { experiment } = this.props;

    return (
      <Chapter className="experiment">
        {experiment.pages.map((page, index) =>
          <PageWrapper
            key={page._key}
            ref={node => this.props.nodes[experiment.slug.current+'/'+index] = node}
          >
            <Page>
              { index === 0 &&
                <Chapter.Title>{experiment.fullTitle}</Chapter.Title>
              }
              <PageContent page={page} />
            </Page>
          </PageWrapper>
        )}
      </Chapter>
    );
  }
}

export default withScroll(ExperimentSubChapter);

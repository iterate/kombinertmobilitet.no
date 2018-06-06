import React from 'react';
import { withScroll } from '../withScroll';
import { Chapter, Page } from '../Chapter.style.js';
import PageContent from 'components/PageContent';

class ExperimentSubChapter extends React.Component {
  render() {
    const { experiment } = this.props;

    return (
      <Chapter className="experiment">
        {experiment.pages.map((page, index) =>
          <Page key={page._key}>
            { index === 0 &&
              <Chapter.Title>{experiment.fullTitle}</Chapter.Title>
            }
            <PageContent page={page} />
          </Page>
        )}
      </Chapter>
    );
  }
}

export default withScroll(ExperimentSubChapter);

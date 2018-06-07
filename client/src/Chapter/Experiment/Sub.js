import React from 'react';
import { Chapter } from '../Chapter.style.js';
import Page from '../Page';
import PageContent from 'components/PageContent';

import { hashify } from 'hashStore';

export default class ExperimentSubChapter extends React.Component {
  render() {
    const { experiment } = this.props;

    return (
      <Chapter className="experiment">
        {experiment.pages.map((page, index) =>
          <Page
            key={page._key}
            hash={hashify(experiment.slug, index)}
          >
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

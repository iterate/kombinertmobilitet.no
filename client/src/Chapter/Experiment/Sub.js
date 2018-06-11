import React from 'react';
import { Chapter, FlexRow } from '../Chapter.style.js';
import Page from '../Page';
import PageContent from 'components/PageContent';
import Info from '../Info';

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
            backgroundColor={page._type === 'reference' ? 'var(--butterscotch)' : ''}
          >
            { index === 0 &&
              <Chapter.Title>{experiment.fullTitle}</Chapter.Title>
            }
            <FlexRow>
              { index === 0 &&
                <Info info={experiment.info} />
              }
              <PageContent page={page} />
            </FlexRow>
          </Page>
        )}
      </Chapter>
    );
  }
}

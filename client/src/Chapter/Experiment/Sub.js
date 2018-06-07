import React from 'react';
import { Chapter } from '../Chapter.style.js';
import Page from '../Page';
import PageContent from 'components/PageContent';

export default class ExperimentSubChapter extends React.Component {
  render() {
    const { experiment } = this.props;

    return (
      <Chapter className="experiment">
        {experiment.pages.map((page, index) =>
          <Page
            key={page._key}
            hash={`${experiment.slug.current}-${index}`}
            ref={node => this.props.nodes[`${experiment.slug.current}-${index}`] = node}
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

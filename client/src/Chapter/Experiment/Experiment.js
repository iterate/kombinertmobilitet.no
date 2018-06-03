import React from 'react';
import { Chapter, Page } from '../Chapter.style.js';
import PageContent from 'components/PageContent';
import { Wrapper, OverviewPage, Title, Item } from './Experiment.style.js';

class Experiment extends React.Component {
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


export default class ExperimentChapter extends React.Component {
  render() {
    const { index } = this.props;
    const { fullTitle, experiments = [] } = this.props.chapter;

    return (
      <Wrapper>
        <OverviewPage>
          <Title>{index + 1}. {fullTitle}</Title>
          {experiments.map(experiment =>
            <Item key={experiment._key}>{experiment.fullTitle}</Item>
          )}
        </OverviewPage>
        {experiments.map(experiment =>
          <Experiment key={experiment._key} experiment={experiment} />
        )}
      </Wrapper>
    );
  }
}

import React, { Fragment } from 'react';
import { withScroll } from '../withScroll';
import { Chapter, Page } from '../Chapter.style.js';
import PageContent from 'components/PageContent';
import { OverviewPage, OverviewPageContent, Title, Item, Star, Footer } from './Experiment.style.js';

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

class ExperimentChapter extends React.Component {
  render() {
    const { index } = this.props;
    const { fullTitle, experiments = [] } = this.props.chapter;

    return (
      <Fragment>
        <OverviewPage>
          <OverviewPageContent>
            <Title>{index + 1}. {fullTitle}</Title>
            {experiments.map(experiment =>
              <Item key={experiment._key}>
                {experiment.description}{experiment.wasCarriedOut && <Star>✦</Star>}
              </Item>
            )}
          </OverviewPageContent>
          <Footer>
            <Star style={{fontSize: '16px', transform: 'none'}}>✦</Star> Utført eksperiment
          </Footer>
        </OverviewPage>
        {experiments.map(experiment =>
          <Experiment key={experiment._key} experiment={experiment} />
        )}
      </Fragment>
    );
  }
}

export default withScroll(ExperimentChapter);

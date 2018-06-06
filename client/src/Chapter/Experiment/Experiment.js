import React from 'react';
import { withScroll } from '../withScroll';
import { OverviewPage, OverviewPageContent, Title, SubChapterLink, Star, Footer } from './Experiment.style.js';

class ExperimentChapter extends React.Component {
  render() {
    const { index, chapter } = this.props;
    const { fullTitle, experiments = [] } = this.props.chapter;

    return (
      <OverviewPage ref={node => this.props.nodes[chapter.slug.current] = node}>
        <OverviewPageContent>
          <Title>{index + 1}. {fullTitle}</Title>
          {experiments.map(experiment =>
            <SubChapterLink
              to={`/${chapter.slug.current}#${experiment.slug.current}`}
              key={experiment._key}
            >
              {experiment.description}{experiment.wasCarriedOut && <Star>✦</Star>}
            </SubChapterLink>
          )}
        </OverviewPageContent>
        <Footer>
          <Star style={{fontSize: '16px', transform: 'none'}}>✦</Star> Utført eksperiment
        </Footer>
      </OverviewPage>
    );
  }
}

export default withScroll(ExperimentChapter);

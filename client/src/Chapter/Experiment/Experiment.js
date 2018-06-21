import React from 'react';
import { OverviewPage, OverviewPageContent, Title, SubChapterLink, Star, Footer } from './Experiment.style.js';
import HashScroller from 'components/HashScroller';

import { setHashedNode, hashify } from 'hashStore';

export default class ExperimentChapter extends React.Component {
  render() {
    const { index, chapter } = this.props;
    const { fullTitle, experiments = [] } = this.props.chapter;

    return (
      <HashScroller hash={`${chapter.slug.current}-0`}>
        <OverviewPage>
          <OverviewPageContent>
            <Title>{index + 1}. {fullTitle}</Title>
            {experiments.map(experiment =>
              <SubChapterLink
                to={`/${chapter.slug.current}#${experiment.slug.current}-0`}
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
      </HashScroller>
    );
  }
}

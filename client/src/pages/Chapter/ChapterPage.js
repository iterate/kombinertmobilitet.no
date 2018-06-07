import React, { Fragment } from 'react';
import Navigation from 'components/Navigation';
import ExperimentSubChapter from 'Chapter/Experiment/Sub';

import { appStore } from 'appStore';

export default class ChapterPage extends React.Component {

  render() {
    const { content } = appStore.contentAsync;
    const { params } = this.props.match;

    const chapter = 
      content.experimentChapters
        .find(chapter => chapter.slug.current === params.chapterSlug);

    if (!chapter) {
      return;
    }

    return (
      <Fragment>
        <Navigation pageContent={content} openExperimentChapter={chapter} />
        {chapter.experiments.map(experiment =>
          <ExperimentSubChapter
            key={experiment._key}
            experiment={experiment}
          />
        )}
      </Fragment>
    );
  }
}

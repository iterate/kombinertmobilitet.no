import React, { Fragment } from 'react';
import Navigation from 'components/Navigation';
import { Experiment } from 'Chapter/Experiment';

import { appStore } from 'appStore';

export default class ChapterPage extends React.Component {
  render() {
    const { content } = appStore.contentAsync;
    const { params } = this.props.match;

    const chapter = 
      content.experimentChapters
        .find(chapter => chapter.slug.current === params.chapterSlug);

    console.log(`chapter`, chapter); // DEBUG

    if (!chapter) {
      return;
    }

    return (
      <Fragment>
        <Navigation pageContent={content} />
        {chapter.experiments.map(experiment =>
          <Experiment key={experiment._key} experiment={experiment} />
        )}
      </Fragment>
    );
  }
}

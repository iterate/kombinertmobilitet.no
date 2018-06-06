import React, { Fragment } from 'react';
import Navigation from 'components/Navigation';
import Chapter from 'Chapter';

import { appStore } from 'appStore';

const MainPage = () => {
  const { content } = appStore.contentAsync;

  return (
    <Fragment>
      <Navigation pageContent={content} />
      {content.introChapters.map(chapter =>
        <Chapter.Intro key={chapter._id} chapter={chapter} />
      )}
      {content.experimentChapters.map((chapter, index) =>
        <Chapter.Experiment key={chapter._id} index={index} chapter={chapter} />
      )}
      {content.summaryChapters.map(chapter =>
        <Chapter.Summary key={chapter._id} chapter={chapter} />
      )}
    </Fragment>
  );
}

export default MainPage;

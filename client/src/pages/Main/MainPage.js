import React, { Fragment } from 'react';
import SiteTitle from './SiteTitle';
import Navigation from 'components/Navigation';
import Chapter from 'Chapter';

import { appStore } from 'appStore';

export default class MainPage extends React.Component {

  render() {
    const { content } = appStore.contentAsync;

    return (
      <Fragment>
        <SiteTitle />
        <Navigation pageContent={content} />
        {content.introChapters.map((chapter, index) =>
          <Chapter.Intro key={chapter._id} index={index} chapter={chapter} />
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
}

import React, { Fragment } from 'react';
import * as N from './Navigation.style.js';

const ChapterLink = (chapter) => (
  <N.Link active={false/*TODO*/} passed={false/*TODO*/}>
    {chapter.menuTitle}
  </N.Link>
);

const SubChapterLink = (chapter) => (
  <N.Link active={false/*TODO*/} passed={false/*TODO*/} subChapter={true}>
    {chapter.menuTitle}
  </N.Link>
);

const active = true;
const ExperimentChapterLink = (chapter) => (
  <Fragment>
    <N.Link active={false/*TODO*/} passed={false/*TODO*/}>
      {chapter.menuTitle}
    </N.Link>
    {active && chapter.experimentChapters.map(SubChapterLink)}
  </Fragment>
);

export default class Navigation extends React.Component {
  render() {
    const { introChapters, experimentChapters, summaryChapters } = this.props.pageContent;

    return (
      <N.Navigation isAtSummary={false/*TODO*/}>
        {introChapters.map(ChapterLink)}
        <br />
        {experimentChapters.map(ExperimentChapterLink)}
        <br />
        {summaryChapters.map(ChapterLink)}
      </N.Navigation>
    );
  }
}

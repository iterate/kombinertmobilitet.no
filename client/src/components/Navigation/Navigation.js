import React, { Fragment } from 'react';
import TableOfContents from './TableOfContents';
import GoToNext from './GoToNext'

const isActive = (chapter) => `${chapter.slug.current}-0` === window.location.hash.split('#')[1];

export default class Navigation extends React.Component {
  render() {
    const { introChapters, experimentChapters, summaryChapters } = this.props.pageContent;

    const atIntro = introChapters.some(isActive);
    const atExperiment = experimentChapters.some(isActive);
    const atSummary = summaryChapters.some(isActive);

    /* eslint-disable no-mixed-operators */
    const color = atIntro && 'var(--pastel-blue)'
      || atExperiment && 'var(--light-gray)'
      || atSummary && 'white'
      || 'white';

    return (
      <Fragment>
        <TableOfContents color={color} {...this.props} />
        <GoToNext color={color} {...this.props} />
      </Fragment>
    );
  }
}

import React, { Fragment } from 'react';
import TableOfContents from './TableOfContents';
import GoToNext from './GoToNext'

const slugName = () => window.location.hash.split('#').slice(-1)[0].split('-').slice(0, -1).join('-');
const isActive = (chapter) => chapter.slug.current === slugName();

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

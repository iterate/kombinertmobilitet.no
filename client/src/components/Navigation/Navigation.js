import React, { Fragment } from 'react';
import TableOfContents from './TableOfContents';
import GoToNext from './GoToNext'

const slugName = () => window.location.hash.split('#').slice(-1)[0].split('-').slice(0, -1).join('-');
const isActive = (chapter) => chapter.slug.current === slugName();

export default class Navigation extends React.Component {
  getFancyColorStyle() {
    const { introChapters, experimentChapters, summaryChapters } = this.props.pageContent;

    const atIntro = introChapters.some(isActive);
    const atExperiment = experimentChapters.some(isActive);
    const atSummary = summaryChapters.some(isActive);

    /* eslint-disable no-mixed-operators */
    return atIntro
      ? { color: 'black' }
      : {
        mixBlendMode: 'difference',
        color: atExperiment && 'var(--light-gray)'
          || atSummary && 'white'
          || 'white',
        transition: 'color 1s linear',
      };
  }
  render() {

    const isOnExperimentPage = Boolean(this.props.openExperimentChapter);
    const style = isOnExperimentPage ? { color: 'black' } : this.getFancyColorStyle();

    return (
      <Fragment>
        <TableOfContents style={style} {...this.props} />
        <GoToNext style={style} {...this.props} />
      </Fragment>
    );
  }
}

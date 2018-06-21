import React, { Fragment } from 'react';
import TableOfContents from './TableOfContents';
import GoToNext from './GoToNext'

const slugName = () => window.location.hash.split('#').slice(-1)[0].split('-').slice(0, -1).join('-');
const isActive = (chapter) => chapter.slug.current === slugName();

export default class Navigation extends React.Component {
  getColorStyle() {
    const { summaryChapters } = this.props.pageContent;

    const atSummary = summaryChapters.some(isActive);

    /* eslint-disable no-mixed-operators */
    return atSummary
      ? {
        mixBlendMode: 'difference',
        backgroundColor: 'black',
        color: 'white',
        transition: 'color 1s linear',
      }
      : {
        color: 'black',
        transition: 'color 1s linear',
      }
    ;
  }
  render() {
    const style = this.getColorStyle();

    return (
      <Fragment>
        <TableOfContents style={style} {...this.props} />
        <GoToNext style={style} {...this.props} />
      </Fragment>
    );
  }
}

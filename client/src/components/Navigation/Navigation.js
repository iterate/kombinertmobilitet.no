import React, { Fragment } from 'react';
import TableOfContents from './TableOfContents';
import GoToNext from './GoToNext'

export default class Navigation extends React.Component {
  render() {
    return (
      <Fragment>
        <TableOfContents {...this.props} />
        <GoToNext {...this.props} />
      </Fragment>
    );
  }
}

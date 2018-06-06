import React, { Fragment } from 'react';
import TableOfContents from './TableOfContents';

export default class Navigation extends React.Component {
  render() {
    return (
      <Fragment>
        <TableOfContents {...this.props} />
      </Fragment>
    );
  }
}

import ReactDOM from 'react-dom';
import React from 'react';

import { setHashedNode } from 'hashStore';

const isActive = (hash) => hash === window.location.hash.split('#')[1];

export default class HashScroller extends React.Component {
  componentDidMount() {
    this.scrollIfMatch('instant');
  }
  componentDidUpdate() {
    this.scrollIfMatch('smooth');
  }
  scrollIfMatch = (behavior) => {
    if (
      !!this.node &&
      isActive(this.props.hash)
    ) {
      ReactDOM
        .findDOMNode(this.node)
        .scrollIntoView({ block: 'start', behavior });
    }
  }
  onRef = (node) => {
    this.node = node;
    setHashedNode(this.props.hash, node);
  }
  render() {
    return (
      <div ref={this.onRef}>
        {this.props.children}
      </div>
    );
  }
}

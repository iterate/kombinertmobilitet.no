import ReactDOM from 'react-dom';
import React from 'react';

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
  render() {
    return (
      <div ref={node => this.node = node}>
        {this.props.children}
      </div>
    );
  }
}

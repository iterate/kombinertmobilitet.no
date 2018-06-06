import React from 'react';
import ReactDOM from 'react-dom';

const isActive = (chapter) => chapter.slug.current === window.location.hash.split('#')[1];

export const withScroll = (Child) => {

  return class extends React.Component {
    componentDidMount() {
      this.scrollIfMatch();
    }
    componentDidUpdate() {
      this.scrollIfMatch();
    }
    scrollIfMatch = () => {
      if (
        !!this.node &&
        isActive(this.props.chapter)
      ) {
        ReactDOM
          .findDOMNode(this.node)
          .scrollIntoView();
      }
    }
    render() {
      return (
        <div ref={node => this.node = node}>
          <Child {...this.props} />
        </div>
      );
    }
  }
}

import React from 'react';
import ReactDOM from 'react-dom';

export const withScroll = (Child) => {

  return class extends React.Component {
    componentDidMount() {
      this.scrollIfMatch();
      window.addEventListener('hashchange', this.scrollIfMatch);
    }
    componentWillUnmount() {
      window.removeEventListener('hashchange', this.scrollIfMatch);
    }
    scrollIfMatch = () => {
      if (window.location.hash.replace('#', '') !== this.props.chapter.slug.current) {
        return;
      }
      if (!this.node) {
        return;
      }

      ReactDOM
        .findDOMNode(this.node)
        .scrollIntoView();
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

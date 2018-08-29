import React from 'react';

export default class Iframe extends React.Component {

  render() {
    const { title, url } = this.props.iframePage;

    return (
      <iframe
        title={title}
        src={url}
        width={`${Math.min(855, window.innerWidth - 220)}px`}
        height={`${Math.floor(0.8 * window.innerHeight)}px`}
      />
    );
  }
}

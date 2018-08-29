import React from 'react';
import BlockContent from './BlockContent';
import Slideshow from './Slideshow';
import QuotePage from './QuotePage';
import Poll from './Poll';
import Reference from './Reference';

export default class PageContent extends React.Component {
  render() {
    const { page } = this.props;

    switch (page._type) {
      case 'blockContent':
        return <BlockContent blockContent={page} />;
      case 'slideshowPage':
        return <Slideshow slideshow={page} />;
      case 'quotePage':
        return <QuotePage quotePage={page} />;
      case 'pollPage':
        return <Poll poll={page} />;
      case 'reference':
        return <Reference obj={page} PageContent={PageContent} />;
      default:
        console.error(`Forgot ${page._type}?`);
        return false;
    }
  }
}

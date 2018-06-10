import React from 'react';
import BlockContent from './BlockContent';
import Slideshow from './Slideshow';
import Poll from './Poll';

const PageContent = ({ page }) => {
  switch (page._type) {
    case 'blockContent':
      return <BlockContent blockContent={page} />;
    case 'slideshowPage':
      return <Slideshow slideshow={page} />;
    case 'reference':
      return <Poll pollId={page._ref} />;
    default:
      console.error(`Forgot ${page._type}?`);
  }
}

export default PageContent;

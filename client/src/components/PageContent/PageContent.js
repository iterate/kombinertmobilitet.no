import React from 'react';
import BlockContent from './BlockContent';

const Slideshow = ({ slideshow }) => (
  <div>
    Slideshow!
  </div>
);

const PageContent = ({ page }) => {
  switch (page._type) {
    case 'blockContent':
      return <BlockContent blockContent={page} />;
    case 'slideshowPage':
      return <Slideshow slideshow={page} />;
    default:
      console.error(`Forgot ${page._type}?`);
  }
}

export default PageContent;

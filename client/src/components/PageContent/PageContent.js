import React from 'react';
import BlockContent from './BlockContent';

const Slideshow = ({ slideshow }) => (
  <div>
    Slideshow!
  </div>
);
const Poll = ({ poll }) => (
  <div>
    Poll!
  </div>
);

const PageContent = ({ page }) => {
  switch (page._type) {
    case 'blockContent':
      return <BlockContent blockContent={page} />;
    case 'slideshowPage':
      return <Slideshow slideshow={page} />;
    case 'pollPage':
      return <Poll poll={page} />;
    default:
      console.error(`Forgot ${page._type}?`);
  }
}

export default PageContent;
import React from 'react';
import * as B from './BlockContent.style.js';

const BlockContent = ({ blockContent }) => (
  <B.BlockContent>
    {blockContent.content.map(block =>
      <B.Block
        key={block._key}
        styleType={block.style}
      >
        {block.children.map(child =>
          <B.Child
            key={block._key}
          >
            {child.text}
          </B.Child>
        )}
      </B.Block>
    )}
  </B.BlockContent>
);

export default BlockContent;

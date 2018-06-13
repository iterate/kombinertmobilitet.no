import React from 'react';
import * as B from './BlockContent.style.js';

import BlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

export default ({ blockContent }) => (
  <B.BlockContent>
    <BlockContent blocks={blockContent.content} serializers={serializers} />
  </B.BlockContent>
);

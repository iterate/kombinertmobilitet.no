import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'

import experimentChapter from './experimentChapter';
import experiment from './experiment';
import slideshowPage from './slideshowPage';
import pollPage, { answerAlternative } from './pollPage';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blockContent, post, author, category,
    experimentChapter,
    experiment,
    slideshowPage,
    pollPage,
    answerAlternative,
  ]),
});

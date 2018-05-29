import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'

import experiment from './experiment';
import experimentChapter from './experimentChapter';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blockContent, post, author, category,
    experimentChapter,
    experiment,
    ])
})
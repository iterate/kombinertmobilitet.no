import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import introChapter from './introChapter';
import summaryChapter from './summaryChapter';

import experimentChapter from './experimentChapter';
import experiment from './experiment';
import blockContent from './blockContent'; // TODO rename?
import slideshowPage from './slideshowPage';
import pollPage, { answerAlternative } from './pollPage';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    introChapter,
    summaryChapter,

    experimentChapter,
    experiment,
    slideshowPage,
    pollPage,
    answerAlternative,
    blockContent,
  ]),
});

import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import introChapter from './introChapter';
import summaryChapter from './summaryChapter';

import experimentChapter from './experimentChapter';
import experiment from './experiment';
import blockContent from './blockContent';
import quotePage from './quotePage';
import slideshowPage from './slideshowPage';
import iframePage from './iframePage';
import pollPage, { answerAlternative } from './pollPage';

import colophon from './colophon';
import infoTuple from './infoTuple';

import website from './website';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    introChapter,
    summaryChapter,

    experimentChapter,
    experiment,
    slideshowPage,
    iframePage,
    pollPage,
    answerAlternative,
    blockContent,
    quotePage,

    colophon,
    infoTuple,

    website,
  ]),
});

const sanityClient = require('@sanity/client');
const token = require('./.sanityToken');

module.exports = sanityClient({
  projectId: '19k70pzh',
  dataset: 'development',
  useCdn: true,
  token: token,
});

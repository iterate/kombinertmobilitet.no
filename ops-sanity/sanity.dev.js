const sanityClient = require('@sanity/client');
const token = require('./.sanityToken');

module.exports = sanityClient({
  projectId: 'dyub8zvy',
  dataset: 'development',
  useCdn: true,
  token: token,
});

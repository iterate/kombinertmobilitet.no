const sanityClient = require('@sanity/client');
const token = require('./.sanityToken');

console.log(`token`, token); // DEBUG

module.exports = sanityClient({
  projectId: '19k70pzh',
  dataset: 'production',
  useCdn: true,
  token: token,
});

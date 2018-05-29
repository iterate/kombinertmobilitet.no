import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: '19k70pzh',
  dataset: 'production',
  useCdn: true,
  token:
    'skv2l1LjkkEVi2Isec5kzzt0TKYKFSfg13OF8GG5NeSJ5Vw4nPJDbCIo4Sm9tjyqaf3MqTDOeHcVSVzi6dCsV9qPlqQv52elsPnZ4VL7gpLYtOa6m2JH6ju7juIkxjV3lprdar1wVtlFxtjOyFLvPGOpBdtS1GiAOBzI34aRMFSkixo6rrF9',
});
export default client;

const builder = imageUrlBuilder(client);

export const getImageUrl = source => builder.image(source);

import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: "******", 
  dataset: "production",
  apiVersion: 'v2021-06-07',
  useCdn: true
});

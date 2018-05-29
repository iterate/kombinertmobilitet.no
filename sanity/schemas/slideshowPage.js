export default {
  name: 'slideshowPage',
  title: 'Slideshow',
  type: 'object',
  fields: [
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [{
        type: 'object',
        title: 'Slide', // is title-property used?
        fields: [
          {
            name: 'image',
            title: 'Bilde',
            type: 'image',
          },
          {
            name: 'subtext',
            title: 'Undertekst',
            type: 'string',
          },
        ],
      }],
    },
  ],
  preview: {
    select: {},
    prepare: () => ({
      title: 'Slideshow',
    }),
  },
};

export default {
  name: 'slideshowPage',
  type: 'array',
  of: [{ type: 'object',
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
};

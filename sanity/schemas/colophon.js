export default {
  name: 'colophon',
  type: 'object',
  fields: [
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
    },
    {
      name: 'infoLists',
      title: 'Info',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Tittel',
            type: 'string',
          },
          {
            name: 'items',
            title: 'Liste',
            type: 'array',
            of: [{ type: 'string' }],
          },
        ],
        preview: {
          select: {
            title: 'title'
          },
        },
      }],
    },
  ],
};

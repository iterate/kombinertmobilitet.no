export default {
  name: 'quotePage',
  title: 'Quote',
  type: 'object',
  fields: [
    {
      name: 'quote',
      title: 'Sitat',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Bilde',
      type: 'image',
    },
  ],
  preview: {
    select: {},
    prepare: () => ({
      title: 'Quote',
    }),
  },
}

export default {
  name: 'experiment',
  type: 'object',
  fields: [
    {
      name: 'menuTitle',
      title: 'Tittel i meny',
      type: 'string',
    },
    {
      name: 'fullTitle',
      title: 'Full tittel',
      description: 'Tittel på første side',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'string',
    },
    {
      name: 'wasCarriedOut',
      title: 'Utført eksperiment',
      type: 'boolean',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'Unik tekststreng som brukes i URL',
      type: 'slug',
      options: {
        maxLength: 32,
      },
    },

    {
      name: 'info',
      title: 'Info',
      description: 'Vises som "Definisjon: Verdi"',
      type: 'array',
      of: [{ type: 'infoTuple'}],
    },

    {
      name: 'pages',
      title: 'Sider',
      type: 'array',
      of: [
        { type: 'blockContent' },
        { type: 'slideshowPage' },
        { type: 'quotePage' },
        { type: 'reference', to: { type: 'pollPage' } },
      ],
    },
  ],
};

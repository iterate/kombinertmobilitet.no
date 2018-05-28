export default {
  type: 'object',
  fields: [
    {
      name: 'menuTitle',
      title: 'Tittel i meny',
      type: 'slug',
    },
    {
      name: 'fullTitle',
      title: 'Full tittel',
      description: 'Tittel på første side av kapitlet'
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'Unik tekststreng som brukes i URL',
      type: 'slug',
      options: {
        source: 'menuTitle',
        maxLength: 32,
      },
    },

    {
      name: 'type',
      title: 'Eksperimentform',
      type: 'string',
    },
    {
      name: 'period',
      title: 'Periode',
      type: 'string',
    },
    {
      name: 'dataSetSize'
      title: 'Datagrunnlag',
      type: 'string',
    },

    {
      name: 'misc',
      title: 'Annet',
      description: 'Vises som "Definisjon: Verdi"',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'key',
            title: 'Definisjon',
            type: 'string',
          },
          {
            name: 'value',
            title: 'Verdi',
            type: 'string',
          },
        ],
      }],
    },
    {
      name: 'pages',
      title: 'Sider',
      type: 'array',
      of: [
        { type: 'blockContent' }, // <-- TODO how does this turn out?
        { type: 'textPage' },
        { type: 'slideshowPage' },
        { type: 'pollPage' },
      ],
    },
  ],
};

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
      name: 'slug',
      title: 'Slug',
      description: 'Unik tekststreng som brukes i URL',
      type: 'slug',
      options: {
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
      name: 'dataSetSize',
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
        preview: {
          select: {
            key: 'key',
            value: 'value',
          },
          prepare: (s) => ({
            title: `${s.key}: ${s.value}`
          }),
        },
      }],
    },
    {
      name: 'pages',
      title: 'Sider',
      type: 'array',
      of: [
        { type: 'blockContent' }, // <-- TODO how does this turn out?
        // { type: 'textPage' },
        // { type: 'slideshowPage' },
        // { type: 'pollPage' },
      ],
    },
  ],
};

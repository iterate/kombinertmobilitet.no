export default {
  name: 'experimentChapter',
  title: 'Eksperiment-kapittel',
  type: 'document',
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
      name: 'sections',
      title: 'Sider',
      of: [{
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
        ],
      }],
    },
  ],
  preview: {
    select: {
      title: 'menuTitle',
      media: 'image'
    }
  }
}

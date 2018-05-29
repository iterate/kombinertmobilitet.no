export default {
  name: 'summaryChapter',
  title: 'Oppsummerings-kapittel',
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
      description: 'Tittel på første side',
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
      name: 'pages',
      title: 'Sider',
      of: TODO,
    },
  ],
  preview: {
    select: {
      title: 'menuTitle',
      media: 'image'
    }
  }
}

export default {
  name: 'introChapter',
  title: 'Intro-kapittel',
  type: 'document',
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
        source: 'menuTitle',
        maxLength: 32,
      },
    },
    {
      name: 'pages',
      title: 'Sider',
      type: 'array',
      of: [
        { type: 'blockContent' },
        { type: 'slideshowPage' },
        { type: 'reference', to: { type: 'pollPage' } },
      ],
    },
  ],
  preview: {
    select: {
      title: 'menuTitle',
      media: 'image'
    }
  }
}

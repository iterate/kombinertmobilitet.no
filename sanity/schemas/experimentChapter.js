export default {
  name: 'experimentChapter',
  title: 'Eksperiment-kapittel',
  type: 'document',
  fields: [
    {
      name: 'menuTitle',
      title: 'Tittel i meny',
      type: 'string',
    },
    {
      name: 'fullTitle',
      title: 'Tittel på første side',
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
      type: 'array',
      of: [{ type: 'experiment' }],
    },
  ],
  preview: {
    select: {
      title: 'menuTitle',
    }
  }
}

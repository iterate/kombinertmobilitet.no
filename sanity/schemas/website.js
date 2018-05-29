export default {
  name: 'website',
  title: 'Nettside',
  type: 'document',
  fields: [
    {
      name: 'introChapters',
      title: 'Introkapitler',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'introChapter' }] }],
    },
    {
      name: 'experimentChapters',
      title: 'Eksperimentkapitler',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'experimentChapter' }] }],
    },
    {
      name: 'summaryChapters',
      title: 'Oppsummeringskapitler',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'summaryChapter' }] }],
    },
  ],
  preview: {
    select: {},
    prepare: () => ({
      title: 'Kombinertmobilitet.no',
      subtitle: 'Komponering av innholdet på hele nettsiden. Skal være nøyaktig én.',
    }),
  },
};

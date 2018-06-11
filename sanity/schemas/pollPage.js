export const answerAlternative = {
  name: 'answerAlternative',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Tekst',
      type: 'string',
    },
    {
      name: 'nofTimesSubmitted',
      title: 'Antall ganger svart',
      type: 'number',
      readOnly: true,
    },
  ],
};

export default {
  type: 'document',
  name: 'pollPage',
  title: 'Poll',
  fields: [
    {
      name: 'question',
      title: 'Spørsmål',
      type: 'string',
    },
    {
      name: 'answerAlternatives',
      title: 'Svaralternativer',
      type: 'array',
      of: [{ type: 'answerAlternative' }],
    },
  ],
  preview: {
    select: {
      title: 'question',
    },
  },
};

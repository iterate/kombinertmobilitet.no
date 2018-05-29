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
  type: 'object',
  name: 'pollPage',
  title: 'Poll page',
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
    // * Question
    // * Array of answers
    // * ...
  ],
  preview: {
    select: {
      title: 'question',
    },
  },
};

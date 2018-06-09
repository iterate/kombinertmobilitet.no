export default {
  name: 'infoTuple',
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
};

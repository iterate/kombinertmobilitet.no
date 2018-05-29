const flatten = (arr, next) => arr.concat(next);

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Innhold',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'}
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    },
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: (s) => {
      const title = s.content
          .slice(0, 1)
          .map(block => block.children.slice(0, 1))
          .reduce(flatten, [])
          .map(child => child.text.slice(0, 25))
          [0];

      return {
        title
      };
    },
  },
};

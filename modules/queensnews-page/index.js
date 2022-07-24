module.exports = {
  extend: '@apostrophecms/piece-page-type',
  options: {
    label: 'Queen\'s News Page',
    pluralLabel: 'Queen\'s News Pages'
  },
  fields: {
    add: {
      subtitle: {
        type: 'string',
        label: 'Page Header',
        textarea: false,
        required: true
      },
      main: {
        type: 'area',
        options: {
          widgets: {
            'custom-image': {},
            '@apostrophecms/rich-text': {},
            '@apostrophecms/html': {},
            'custom-divider': {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'subtitle', 'main' ]
      }
    }
  }
};

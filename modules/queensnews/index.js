module.exports = {
  extend: '@apostrophecms/piece-type',
  methods: (self, options) => {},
  options: {
    label: 'Queens News Post',
    pluralLabel: 'Queens News Posts'
  },
  fields: {
    add: {
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
        fields: [ 'title', 'main' ]
      }
    }
  }
};

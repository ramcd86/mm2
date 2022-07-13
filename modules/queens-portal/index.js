module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Queen\'s Portal'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          widgets: {
            "custom-image": {},
            "@apostrophecms/rich-text": {},
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'main'
        ]
      }
    }
  }
};

module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Church Music Design Portal'
  },
  fields: {
    add: {
      pageTitle: {
        type: "string",
        label: "Page Header",
        textarea: false,
        required: true,
      },
      main: {
        type: 'area',
        options: {
          widgets: {
            "custom-image": {},
            "@apostrophecms/rich-text": {},
            "custom-divider": {},
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'pageTitle',
          'main',
        ]
      }
    }
  }
};

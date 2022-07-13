module.exports = {
  extend: "@apostrophecms/piece-type",
  methods: (self, options) => {},
  options: {
    label: "Queens News Post",
    pluralLabel: "Queens News Posts"
  },
  fields: {
    add: {
      main: {
        type: "area",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "custom-image": {},
          },
        },
      },
    },
    group: {
      basics: {
        fields: [
          "title",
          "main",
        ],
      },
    },
  },
};

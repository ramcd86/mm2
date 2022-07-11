module.exports = {
  extend: "@apostrophecms/page-type",
  fields: {
    add: {
      subtitle: {
        type: "string",
      },
      main: {
        type: "area",
        options: {
          widgets: {
            "custom-image": {},
            "@apostrophecms/rich-text": {},
          },
        },
      },
    },
    group: {
      basics: {
        fields: ["title", "subtitle", "main"],
      },
    },
  },
};

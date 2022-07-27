module.exports = {
  extend: "@apostrophecms/page-type",
  options: {
    label: "Queen's Portal",
  },
  fields: {
    add: {
      pageDescription: {
        type: "string",
        label: "Page Description",
        textarea: true,
        required: false,
      },
      main: {
        type: "area",
        options: {
          widgets: {
            "custom-image": {},
            "@apostrophecms/rich-text": {},
            "@apostrophecms/html": {},
            "custom-divider": {},
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title", "pageDescription", "main"],
      },
    },
  },
};

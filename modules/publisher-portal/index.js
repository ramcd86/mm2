module.exports = {
  extend: "@apostrophecms/page-type",
  options: {
    label: "Publisher (Book & Note) Portal",
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

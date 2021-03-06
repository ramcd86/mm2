module.exports = {
  extend: "@apostrophecms/page-type",
  options: {
    label: "Publisher Delivery Portal",
  },
  fields: {
    add: {
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
        fields: ["title", "main"],
      },
    },
  },
};

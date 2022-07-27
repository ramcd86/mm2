module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Custom Image Widget",
  },
  fields: {
    add: {
      alignment: {
        type: "select",
        label: "Image Alignment",
        required: true,
        readOnly: false,
        choices: [
          {
            label: "Left (Default)",
            value: "img-left",
          },
          {
            label: "Right",
            value: "img-right",
          },
          {
            label: "Center",
            value: "img-center",
          },
        ],
      },
      width: {
        type: "select",
        label: "Image Width",
        required: true,
        readOnly: false,
        choices: [
          {
            label: "25% (Default)",
            value: "img-25",
          },
          {
            label: "33%",
            value: "img-33",
          },
          {
            label: "50%",
            value: "img-50",
          },
          {
            label: "66%",
            value: "img-66",
          },
          {
            label: "75%",
            value: "img-75",
          },
          {
            label: "100%",
            value: "img-100",
          },
        ],
      },
      isGallery: {
        type: "boolean",
        label: "Is multi-image gallery?",
        required: false,
      },
      image: {
        type: "area",
        label: "Selected Image",
        options: {
          widgets: {
            "@apostrophecms/image": {},
          },
        },
      },
    },
  },
};

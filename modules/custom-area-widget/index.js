module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Custom Area Widget",
  },
  fields: {
    add: {
      background: {
        type: "select",
        label: "With background?",
        required: true,
        readOnly: false,
        choices: [
          {
            label: "No",
            value: "",
          },
          {
            label: "Yes",
            value: "area-bg",
          },
        ],
      },
      width: {
        type: "select",
        label: "Area Width",
        required: true,
        readOnly: false,
        choices: [
          {
            label: "100% (Default)",
            value: "area-100",
          },
          {
            label: "75%",
            value: "area-75",
          },
          {
            label: "66%",
            value: "area-66",
          },
          {
            label: "50%",
            value: "area-50",
          },
          {
            label: "33%",
            value: "area-33",
          },
          {
            label: "25%",
            value: "area-25",
          },
        ],
      },
      definedArea: {
        type: "area",
        label: "Selected Image",
        options: {
          widgets: {
            "custom-image": {},
            "@apostrophecms/rich-text": {
              toolbar: [
                "styles",
                "|",
                "bold",
                "italic",
                "strike",
                "link",
                "|",
                "blockquote",
                "bulletList",
                "orderedList",
                "alignLeft",
                "alignCenter",
                "alignRight",
                "undo",
                "redo",
              ],
              styles: [
                {
                  tag: "p",
                  label: "Paragraph (P)",
                },
                {
                  tag: "h3",
                  label: "Heading 3 (H3)",
                },
                {
                  tag: "h4",
                  label: "Heading 4 (H4)",
                },
              ],
            },
            "@apostrophecms/html": {},
            "custom-divider": {},
          },
        },
      },
    },
  },
};

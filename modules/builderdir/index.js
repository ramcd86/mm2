module.exports = {
  extend: "@apostrophecms/piece-type",
  methods: (self, options) => {},
  options: {
    label: "Organ Builder Directory",
    pluralLabel: "Organ Builder Directories",
    // Additionally add a `pluralLabel` option if needed.
  },
  fields: {
    add: {
      alpha: {
        type: "select",
        label: "Organ Builders by Alphabet",
        required: true,
        readOnly: false,
        choices: [
          {
            label: "A",
            value: "A",
          },
          {
            label: "B",
            value: "B",
          },
          {
            label: "C",
            value: "C",
          },
          {
            label: "D",
            value: "D",
          },
          {
            label: "E",
            value: "E",
          },
          {
            label: "F",
            value: "F",
          },
          {
            label: "G",
            value: "G",
          },
          {
            label: "H",
            value: "H",
          },
          {
            label: "I",
            value: "I",
          },
          {
            label: "J",
            value: "J",
          },
          {
            label: "K",
            value: "K",
          },
          {
            label: "L",
            value: "L",
          },
          {
            label: "M",
            value: "M",
          },
          {
            label: "N",
            value: "N",
          },
          {
            label: "O",
            value: "O",
          },
          {
            label: "P",
            value: "P",
          },
          {
            label: "Q",
            value: "Q",
          },
          {
            label: "R",
            value: "R",
          },
          {
            label: "S",
            value: "S",
          },
          {
            label: "T",
            value: "T",
          },
          {
            label: "U",
            value: "U",
          },
          {
            label: "V",
            value: "V",
          },
          {
            label: "W",
            value: "W",
          },
          {
            label: "X",
            value: "X",
          },
          {
            label: "Y",
            value: "Y",
          },
          {
            label: "Z",
            value: "Z",
          },
        ],
      },
      isLinkOnly: {
        type: "select",
        label:
          "Is Link Only? (Select if you only want to link to the builder's website)",
        choices: [
          {
            label: "Yes",
            value: true,
          },
          {
            label: "No",
            value: false,
          },
        ],
      },
      postcode: {
        type: "string",
        label: "Postcode",
        textarea: false,
        required: false,
      },
      externalUrl: {
        type: "string",
        label: "Organ Builder's Website (With http:// !!!)",
        textarea: false,
        required: false,
      },
      main: {
        type: "area",
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
            "custom-area": {},
          },
        },
      },
    },
    group: {
      basics: {
        fields: [
          "title",
          "isLinkOnly",
          "externalUrl",
          "postcode",
          "main",
          "alpha",
        ],
      },
    },
  },
};

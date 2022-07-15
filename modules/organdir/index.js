module.exports = {
  extend: "@apostrophecms/piece-type",
  methods: (self, options) => {},
  options: {
    label: "Organ Directory",
    pluralLabel: "Organ Directories",
    // Additionally add a `pluralLabel` option if needed.
  },
  fields: {
    add: {
      alpha: {
        type: "select",
        label: "Organs by Alphabet",
        required: true,
        readOnly: false,
        choices: [
          { label: "A", value: "A" },
          { label: "B", value: "B" },
          { label: "C", value: "C" },
          { label: "D", value: "D" },
          { label: "E", value: "E" },
          { label: "F", value: "F" },
          { label: "G", value: "G" },
          { label: "H", value: "H" },
          { label: "I", value: "I" },
          { label: "J", value: "J" },
          { label: "K", value: "K" },
          { label: "L", value: "L" },
          { label: "M", value: "M" },
          { label: "N", value: "N" },
          { label: "O", value: "O" },
          { label: "P", value: "P" },
          { label: "Q", value: "Q" },
          { label: "R", value: "R" },
          { label: "S", value: "S" },
          { label: "T", value: "T" },
          { label: "U", value: "U" },
          { label: "V", value: "V" },
          { label: "W", value: "W" },
          { label: "X", value: "X" },
          { label: "Y", value: "Y" },
          { label: "Z", value: "Z" },
        ],
      },
      isRetired: {
        type: "select",
        label: "Organ is Retired/Removed?",
        required: true,
        choices: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      outsideGermany: {
        type: "string",
        label: "Outside Germany Label, (IE, DK, NL, etc)",
        textarea: false,
        required: false,
      },
      postcode: {
        type: "string",
        label: "Postcode",
        textarea: false,
        required: false,
      },
      externalUrl: {
        type: "string",
        label: "External URL?",
        textarea: false,
        required: false,
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
        fields: [
          "title",
          "main",
          "postcode",
          "isRetired",
          "outsideGermany",
          "externalUrl",
          "alpha",
        ],
      },
    },
  },
};

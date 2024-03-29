module.exports = {
  extend: "@apostrophecms/piece-page-type",
  methods: (self, options) => {
    self.buildUrl = (req, page, piece) => {
      if (!page) {
        return false;
      }
      return piece.externalUrl
        ? piece.externalUrl
        : page._url + "/" + piece.slug;
    };
    self.chooseParentPage = (pages, piece) => {
      return pages.find((page) => page.alpha === piece.alpha);
    };
    self.filterByIndexPage = (query, page) => {
      query.alpha(page.alpha);
    };
  },
  options: {
    label: "Organ Directory Page",
    pluralLabel: "Organ Directory Pages",
  },
  fields: {
    add: {
      subtitle: {
        type: "string",
        label: "Page Header",
        textarea: false,
        required: true,
      },
      alpha: {
        type: "select",
        label: "Organs by Alphabet",
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
      main: {
        type: "area",
        label: "Main Summary",
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
        label: "Basics",
        fields: [
          "title",
          "subtitle",
          "sideContent",
          "main",
          "paidContent",
          "_topics",
          "alpha",
        ],
      },
    },
  },
};

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
    label: "Church Musicians Directory Page",
    pluralLabel: "Church Musicians Directory Pages",
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
        label: "Organs Builders by Alphabet",
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
        fields: ["title", "subtitle", "main", "_topics", "alpha"],
      },
    },
  },
};

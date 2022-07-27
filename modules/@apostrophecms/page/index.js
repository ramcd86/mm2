// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: "default-page",
        label: "Default",
      },
      {
        name: "@apostrophecms/home-page",
        label: "Home",
      },
      {
        name: "organdir-page",
        label: "Organ Directory",
      },
      {
        name: "organdir-alphabase-page",
        label: "Organs Alphabetical Base Page",
      },
      {
        name: "builderdir-page",
        label: "Organ Builder Directory",
      },
      {
        name: "builderdir-alphabase-page",
        label: "Organ Builders Alphabetical Base Page",
      },
      {
        name: "musiciandir-alphabase-page",
        label: "Church Musicians Alphabetical Base Page",
      },
      {
        name: "musiciandir-page",
        label: "Church Musicians Directory",
      },
      {
        name: "queens-portal",
        label: "Queen's Portal",
      },
      {
        name: "queens-default-page",
        label: "Queen's Portal Standard Page",
      },
      {
        name: "queensnews-page",
        label: "Queen's News Page",
      },
      {
        name: "shop-portal",
        label: "Shop Portal",
      },
      {
        name: "publisher-portal",
        label: "Publisher (Book & Note) Portal",
      },
      {
        name: "publisher-default-page",
        label: "Publisher's Standard Page",
      },
      {
        name: "publisher-delivery-portal",
        label: "Publisher Delivery (KDL-VA)",
      },
      {
        name: "publicationsdir-alphabase-page",
        label: "Publications Alphabetical Base Page",
      },
      {
        name: "publicationsdir-page",
        label: "Publications Directory",
      },
      {
        name: "notenkeller-portal",
        label: "Notenkeller Celle Portal",
      },
      {
        name: "church-music-design-portal",
        label: "Church Music Design (KMD)",
      },
    ],
  },
};

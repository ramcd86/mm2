require('apostrophe')({
  shortName: 'musikmedienhaus',
  modules: {
    organdir: {},
    builderdir: {},
    musiciandir: {},
    queensnews: {},
    "custom-image-widget": {},
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    // `className` options set custom CSS classes for Apostrophe core widgets.
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bp-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'bp-image-widget'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'bp-video-widget'
      }
    },
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    // The project's first custom page type.
    'default-page': {},
    "organdir-page": {},
    "organdir-alphabase-page": {},
    "builderdir-page": {},
    "builderdir-alphabase-page": {},
    "musiciandir-page": {},
    "musiciandir-alphabase-page": {},
    "queens-portal": {},
    "queens-default-page": {},
    "queensnews-page": {},
    "church-music-design-portal": {},
    "notenkeller-portal": {},
    "publisher-delivery-portal": {},
    "publisher-portal": {},
    "shop-portal": {}
  }
});

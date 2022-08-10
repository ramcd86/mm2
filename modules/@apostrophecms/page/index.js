// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: '@apostrophecms/search',
        label: 'Search'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      },
      {
        name: 'organdir-alphabase-page',
        label: 'Organs Listing BASE Page'
      },
      {
        name: 'builderdir-alphabase-page',
        label: 'Organ Builders Listing BASE Page'
      },
      {
        name: 'musiciandir-alphabase-page',
        label: 'Church Musicians Listing BASE Page'
      },
      {
        name: 'publicationsdir-alphabase-page',
        label: 'Publications Listing BASE Page'
      },
      {
        name: 'organdir-page',
        label: 'Organ Listing Page (A-Z)'
      },
      {
        name: 'builderdir-page',
        label: 'Organ Builder Listing Page (A-Z)'
      },
      {
        name: 'musiciandir-page',
        label: 'Church Listing Page (A-Z)'
      },
      {
        name: 'publicationsdir-page',
        label: 'Publications Listing Page (A-Z)'
      },
      {
        name: 'queensnews-page',
        label: 'Queen\'s NEWS Page'
      },
      {
        name: 'queens-portal',
        label: 'Queen\'s PORTAL Page'
      },
      {
        name: 'publisher-portal',
        label: 'Publisher (Book & Note) PORTAL Page'
      },
      {
        name: 'publisher-delivery-portal',
        label: 'Publisher Delivery (KDL-VA) PORTAL Page'
      },
      {
        name: 'notenkeller-portal',
        label: 'Notenkeller PORTAL Page'
      },
      {
        name: 'church-music-design-portal',
        label: 'Church Music Design (KMD) PORTAL Page'
      },
      {
        name: 'shop-portal',
        label: 'e-Shop PORTAL Page'
      },
      {
        name: 'queens-default-page',
        label: 'Queen\'s STANDARD Page'
      },
      {
        name: 'publisher-default-page',
        label: 'Publisher (Book & Note) STANDARD page'
      },
      {
        name: 'publisher-delivery-default-page',
        label: 'Publisher Delivery (KDL-VA) STANDARD Page'
      },
      {
        name: 'notenkeller-default-page',
        label: 'Notenkeller STANDARD page'
      },
      {
        name: 'church-music-default-page',
        label: 'Church Music STANDARD page'
      },
      {
        name: 'shop-default-page',
        label: 'e-Shop STANDARD Page'
      }
    ]
  }
};

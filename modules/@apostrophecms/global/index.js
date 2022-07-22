module.exports = {
  fields: {
    add: {
      // Adding our array field, `primaryNav`
      mediaLinks: {
        label: 'Social Media Links',
        type: 'array',
        titleField: 'label',
        // The array schema for each item
        fields: {
          add: {
            label: {
              label: 'Social Media Item Label',
              type: 'string'
            },
            url: {
              label: 'Link',
              type: 'string'
            }
          }
        }
      },
      mainNavLinks: {
        label: 'Main Navigation Links',
        type: 'array',
        titleField: 'label',
        // The array schema for each item
        fields: {
          add: {
            label: {
              label: 'Nav item label',
              type: 'string'
            },
            _page: {
              label: 'Page to link',
              type: 'relationship',
              withType: '@apostrophecms/page',
              max: 1,
              required: false,
              builders: {
                project: {
                  title: 1,
                  _url: 1
                }
              }
            }
          }
        }
      },
      miniFooter: {
        label: 'Mini Footer Links',
        type: 'array',
        titleField: 'label',
        // The array schema for each item
        fields: {
          add: {
            label: {
              label: 'Nav item label',
              type: 'string'
            },
            url: {
              label: 'Link',
              type: 'string'
            },
            _page: {
              label: 'Page to link',
              type: 'relationship',
              withType: '@apostrophecms/page',
              max: 1,
              required: false,
              builders: {
                project: {
                  title: 1,
                  _url: 1
                }
              }
            }

          }
        }
      },
      queensPortalLinks: {
        label: 'Queen\'s Portal Directory Links',
        type: 'array',
        titleField: 'label',
        // The array schema for each item
        fields: {
          add: {
            label: {
              label: 'Nav item label',
              type: 'string'
            },
            _page: {
              label: 'Page to link',
              type: 'relationship',
              withType: '@apostrophecms/page',
              max: 1,
              required: false,
              builders: {
                project: {
                  title: 1,
                  _url: 1
                }
              }
            }
          }
        }
      },
      queensPortalOrganLinks: {
        label: 'Queen\'s Portal Organ Links',
        type: 'array',
        titleField: 'label',
        // The array schema for each item
        fields: {
          add: {
            label: {
              label: 'Nav item label',
              type: 'string'
            },
            _page: {
              label: 'Page to link',
              type: 'relationship',
              withType: '@apostrophecms/page',
              max: 1,
              required: false,
              builders: {
                project: {
                  title: 1,
                  _url: 1
                }
              }
            }
          }
        }
      },
      queensPortalOrganBuilderLinks: {
        label: 'Queen\'s Portal Organ Builder Links',
        type: 'array',
        titleField: 'label',
        // The array schema for each item
        fields: {
          add: {
            label: {
              label: 'Nav item label',
              type: 'string'
            },
            _page: {
              label: 'Page to link',
              type: 'relationship',
              withType: '@apostrophecms/page',
              max: 1,
              required: false,
              builders: {
                project: {
                  title: 1,
                  _url: 1
                }
              }
            }
          }
        }
      },
      queensPortalChurchMusiciansLinks: {
        label: 'Queen\'s Portal Church Musicians Links',
        type: 'array',
        titleField: 'label',
        // The array schema for each item
        fields: {
          add: {
            label: {
              label: 'Nav item label',
              type: 'string'
            },
            _page: {
              label: 'Page to link',
              type: 'relationship',
              withType: '@apostrophecms/page',
              max: 1,
              required: false,
              builders: {
                project: {
                  title: 1,
                  _url: 1
                }
              }
            }
          }
        }
      },
      queensPortalGeneralLinks: {
        label: 'Queen\'s Portal Top Bar Links',
        type: 'array',
        titleField: 'label',
        // The array schema for each item
        fields: {
          add: {
            label: {
              label: 'Nav item label',
              type: 'string'
            },
            url: {
              label: 'Link',
              type: 'string'
            },
            _page: {
              label: 'Page to link',
              type: 'relationship',
              withType: '@apostrophecms/page',
              max: 1,
              required: false,
              builders: {
                project: {
                  title: 1,
                  _url: 1
                }
              }
            }
          }
        }
      },
      publisherPortalGeneralLinks: {
        label: 'Publisher\'s Portal Top Bar Links',
        type: 'array',
        titleField: 'label',
        // The array schema for each item
        fields: {
          add: {
            label: {
              label: 'Nav item label',
              type: 'string'
            },
            url: {
              label: 'Link',
              type: 'string'
            },
            _page: {
              label: 'Page to link',
              type: 'relationship',
              withType: '@apostrophecms/page',
              max: 1,
              required: false,
              builders: {
                project: {
                  title: 1,
                  _url: 1
                }
              }
            }
          }
        }
      }
    },

    group: {
      siteLayout: {
        label: 'Layout Links',
        fields: [ 'mediaLinks', 'mainNavLinks', 'miniFooter' ]
      },
      queensPortal: {
        label: 'Queen\'s Portal',
        fields: [
          'queensPortalLinks',
          'queensPortalOrganLinks',
          'queensPortalOrganBuilderLinks',
          'queensPortalChurchMusiciansLinks',
          'queensPortalGeneralLinks'
        ]
      },
      publisherPortal: {
        label: 'Publisher Portal',
        fields: [
          'publisherPortalGeneralLinks'
        ]
      }
    }
  }
};

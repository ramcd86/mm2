module.exports = {
  components(self) {
    return {
      async queensnavigation(req, data) {
        return [];
      },
      async breadcrumbs(req, data) {
        return [];
      },
      async minifooter(req, data) {
        return [];
      },
      async queensheadlines(req, data) {
        let queensNewsHeadlines = [];

        const dbData = await self.apos.db
          .collection('aposDocs')
          .find({ type: 'queensnews' })
          .toArray();

        const slicedDbData = dbData.slice(-(data.max + 1)).reverse();

        slicedDbData.forEach((item) => {
          if (
            !item.archived &&
            item.visibility === 'public' &&
            item.aposLocale === 'en:published'
          ) {
            console.log('item.updatedAt', item.updatedAt);
            queensNewsHeadlines.push({
              title: item.title || '',
              summary: item.summary || '',
              historicUrls: item.historicUrls || [],
              slug: item.slug || '',
              visibility: item.visibility || '',
              archived: item.archived || true,
              updatedAt:
                new Date(item.updatedAt).toLocaleDateString('de-DE', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric'
                }) || ''
            });
          }
        });

        queensNewsHeadlines = [ ...new Set(queensNewsHeadlines) ];

        return {
          queensNewsHeadlines
        };
      },
      async organsheadlines(req, data) {
        const organsHeadlines = [];

        const dbData = await self.apos.db
          .collection('aposDocs')
          .find({ type: 'organdir' })
          .toArray();

        const slicedDbData = dbData.slice(-(data.max + 1)).reverse();

        // console.log('slicedDbData', slicedDbData);

        slicedDbData.forEach((item) => {
          if (
            !item.archived &&
            item.visibility === 'public' &&
            item.aposLocale === 'en:published'
          ) {
            organsHeadlines.push({
              title: item.title || '',
              alpha: item.alpha.toLowerCase() || '',
              slug: item.slug || '',
              updatedAt:
                new Date(item.updatedAt).toLocaleDateString('de-DE', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric'
                }) || ''
            });
          }
        });

        // organsHeadlines = [ ...new Set(organsHeadlines) ];

        // console.log('organsHeadlines', organsHeadlines);

        return {
          organsHeadlines
        };
      }
    };
  },
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [
                'styles',
                '|',
                'bold',
                'italic',
                'strike',
                'link',
                '|',
                'bulletList',
                'orderedList'
              ],
              styles: [
                {
                  tag: 'p',
                  label: 'Paragraph (P)'
                },
                {
                  tag: 'h3',
                  label: 'Heading 3 (H3)'
                },
                {
                  tag: 'h4',
                  label: 'Heading 4 (H4)'
                }
              ]
            },
            '@apostrophecms/image': {},
            '@apostrophecms/video': {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'main' ]
      }
    }
  }
};

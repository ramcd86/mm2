module.exports = {
  components(self) {
    return {
      async homepagenavigation(req, data) {},
      async searchcomponent(req, data) {},
      async queensnavigation(req, data) {
        return [];
      },
      async publishernavigation(req, data) {
        return [];
      },
      async publisherdeliverynavigation(req, data) {
        return [];
      },
      async notenkellernavigation(req, data) {
        return [];
      },
      async eshopnavigation(req, data) {
        return [];
      },
      async churchmusicnavigation(req, data) {
        return [];
      },
      async breadcrumbs(req, data) {
        return [];
      },
      async minifooter(req, data) {
        return [];
      },
      async dirnav(req, data) {
        const selectedPageNav = data.selectedPageNav;
        return {
          selectedPageNav,
        };
      },
      async queensheadlines(req, data) {
        let queensNewsHeadlines = [];

        const dbData = await self.apos.db
          .collection("aposDocs")
          .find({ type: "queensnews" })
          .toArray();

        const parentObject = await self.apos.db
          .collection("aposDocs")
          .find({ type: "queensnews-page" })
          .toArray();

        const slicedDbData = dbData.slice(-(data.max + 1)).reverse();

        slicedDbData.forEach((item) => {
          if (
            !item.archived &&
            item.visibility === "public" &&
            item.aposLocale === "en:published"
          ) {
            queensNewsHeadlines.push({
              title: item.title || "",
              summary: item.summary || "",
              historicUrls: item.historicUrls || [],
              slug: parentObject[0].slug + "/" + item.slug || "",
              visibility: item.visibility || "",
              archived: item.archived || true,
              updatedAt:
                new Date(item.updatedAt).toLocaleDateString("de-DE", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                }) || "",
            });
          }
        });

        queensNewsHeadlines = [...new Set(queensNewsHeadlines)];

        return {
          queensNewsHeadlines,
        };
      },
      async organsheadlines(req, data) {
        const organsHeadlines = [];

        const dbData = await self.apos.db
          .collection("aposDocs")
          .find({ type: "organdir" })
          .toArray();

        const parentObject = await self.apos.db
          .collection("aposDocs")
          .find({ type: "organdir-page" })
          .toArray();

        const slicedDbData = dbData.slice(-(data.max + 1)).reverse();

        slicedDbData.forEach((item) => {
          if (
            !item.archived &&
            item.visibility === "public" &&
            item.aposLocale === "en:published"
          ) {
            organsHeadlines.push({
              title: item.title || "",
              alpha: item.alpha.toLowerCase() || "",
              slug: parentObject[0].slug + "/" + item.slug || "",
              updatedAt:
                new Date(item.updatedAt).toLocaleDateString("de-DE", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                }) || "",
            });
          }
        });

        return {
          organsHeadlines,
        };
      },
      async musicianheadlines(req, data) {
        const musiciansHeadlines = [];

        const dbData = await self.apos.db
          .collection("aposDocs")
          .find({ type: "musiciandir" })
          .toArray();

        const parentObject = await self.apos.db
          .collection("aposDocs")
          .find({ type: "musiciandir-page" })
          .toArray();

        const slicedDbData = dbData.slice(-(data.max + 1)).reverse();

        slicedDbData.forEach((item) => {
          if (
            !item.archived &&
            item.visibility === "public" &&
            item.aposLocale === "en:published"
          ) {
            musiciansHeadlines.push({
              title: item.title || "",
              alpha: item.alpha.toLowerCase() || "",
              slug: parentObject[0].slug + "/" + item.slug || "",
              updatedAt:
                new Date(item.updatedAt).toLocaleDateString("de-DE", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                }) || "",
            });
          }
        });

        return {
          musiciansHeadlines,
        };
      },
      async publicationheadlines(req, data) {
        const publicationHeadlines = [];

        const dbData = await self.apos.db
          .collection("aposDocs")
          .find({ type: "publicationsdir" })
          .toArray();

        const parentObject = await self.apos.db
          .collection("aposDocs")
          .find({ type: "publicationsdir-page" })
          .toArray();

        const slicedDbData = dbData.slice(-(data.max + 1)).reverse();

        slicedDbData.forEach((item) => {
          if (
            !item.archived &&
            item.visibility === "public" &&
            item.aposLocale === "en:published"
          ) {
            publicationHeadlines.push({
              title: item.title || "",
              alpha: item.alpha.toLowerCase() || "",
              slug: parentObject[0].slug + "/" + item.slug || "",
              updatedAt:
                new Date(item.updatedAt).toLocaleDateString("de-DE", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                }) || "",
            });
          }
        });

        return {
          publicationHeadlines,
        };
      },
    };
  },
  options: {
    label: "Home Page",
  },
  fields: {
    add: {
      shopBlocks: {
        label: "Shop Blocks",
        type: "area",
        options: {
          widgets: {
            "custom-area": {},
          },
        },
      },
      featuredArticle: {
        label: "Feature Article",
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
      main: {
        type: "area",
        options: {
          widgets: {
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
            "@apostrophecms/image": {},
            "@apostrophecms/video": {},
          },
        },
      },
      additionalBlocks: {
        label: "Miscellaneous Blocks",
        type: "area",
        options: {
          widgets: {
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
          "main",
          "shopBlocks",
          "featuredArticle",
          "additionalBlocks",
        ],
      },
    },
  },
};

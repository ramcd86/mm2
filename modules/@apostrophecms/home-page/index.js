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
        const handledQueryData = [];

        const dbData = await self.apos.db
          .collection("aposDocs")
          .find({ type: "queensnews" })
          .toArray();

        console.log(dbData)

        const slicedDbData = dbData.slice(-(data.max + 1)).reverse();

        // slicedDbData.forEach((item) => {
        //   if (!item.archived && item.visibility === "public") {
        //     handledQueryData.push({
        //       title: item.title || "",
        //       summary: item.summary || "",
        //       historicUrls: item.historicUrls || [],
        //       slug: item.slug || "",
        //       visibility: item.visibility || "",
        //       archived: item.archived || true,
        //       updatedAt:
        //         new Date(item.updatedAt).toLocaleDateString("de-DE", {
        //           weekday: "long",
        //           year: "numeric",
        //           month: "long",
        //           day: "numeric",
        //           hour: "numeric",
        //           minute: "numeric",
        //         }) || "",
        //     });
        //   }
        // });
        //
        // const headlines = handledQueryData.slice(
        //   Math.max(handledQueryData.length - 5, 1)
        // );

        return {
          slicedDbData
        };
      },
    };
  },
  options: {
    label: "Home Page",
  },
  fields: {
    add: {
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
                "bulletList",
                "orderedList",
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
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title", "main"],
      },
    },
  },
};

export default {
    tags: "entries",

    eleventyComputed: {
      permalink: (data) => {
        // if (data.url) {
          return false;
        // }
        // return data.fileSlug
      },
      slug: "{{page.fileSlug}}"
    }
  };
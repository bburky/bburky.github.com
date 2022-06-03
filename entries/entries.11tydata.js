
module.exports = {
    // Add "entries" tag to all posts
    tags: "entries",
    // Dynamically set permalink=false when data.url is set
    eleventyComputed: {
        permalink: (data) => {
          // if (data.url) {
          //   return false;
          // }
          return false;
      }
    }
  };
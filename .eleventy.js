const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addTemplateFormats([
    "css"
  ]);

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->"
  });

  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addFilter('excerpt', async function (content) {
    const { renderTemplate } = eleventyConfig.javascriptFunctions;
    if (!content.data.page?.excerpt) {
      return content.templateContent;
    }
    return await renderTemplate(content.data.page.excerpt, "md", content.data);
  });
};
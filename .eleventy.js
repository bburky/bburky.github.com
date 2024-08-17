import pluginRss from "@11ty/eleventy-plugin-rss";

// import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {

	eleventyConfig.addPlugin(pluginRss);

	eleventyConfig.addCollection('published_entries', collections => {
		return collections.getFilteredByTag('entries')
		  .filter(entry => !entry.data.draft);
	  });

  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addTemplateFormats([
    "css"
  ]);

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->"
  });

  eleventyConfig.addFilter('excerpt', async function (content) {
    if (!content.data.page?.excerpt) {
      return content.templateContent;
    }
	return await this.renderTemplate(content.data.page.excerpt, "md", content.data);
  });
};
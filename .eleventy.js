import { EleventyRenderPlugin } from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {
	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "entries", // iterate over `collections.posts`
			limit: 0, // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "bburky",
			subtitle: "This is a longer description about your blog.",
			base: "https://bburky.com/",
			author: {
				name: "Blake Burkhart",
				// email: "", // Optional
			}
		}
	});

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
    if (!content.data.page?.excerpt) {
      return content.templateContent;
    }
	return await this.renderTemplate(content.data.page.excerpt, "md", content.data);
  });
};
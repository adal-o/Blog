module.exports = function(eleventyConfig) {
  // Copy static assets to maintain your existing structure
  eleventyConfig.addPassthroughCopy("src/static");
  // Create a collection for blog posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  eleventyConfig.addFilter("removeLeadingSlash", function(url) {
    return url.startsWith("/") ? url.slice(1) : url;
  });
  
  // Set input/output directories
  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      data: "_data"
    },
    // Use Nunjucks for templating
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
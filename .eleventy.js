module.exports = function(eleventyConfig) {
  // Copy static assets to maintain your existing structure
  eleventyConfig.addPassthroughCopy("src/static");
  
  // Copy admin folder for CMS
  eleventyConfig.addPassthroughCopy("src/admin");
  
  // Copy images/uploads folder for blog images
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Create a collection for blog posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
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
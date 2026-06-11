module.exports = function(eleventyConfig) {
  // Copy static assets to maintain your existing structure
  eleventyConfig.addPassthroughCopy("src/static");

  // Create a collection for blog posts (sorted oldest-first by `date`)
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  eleventyConfig.addFilter("removeLeadingSlash", function(url) {
    return url.startsWith("/") ? url.slice(1) : url;
  });

  // Dates from front matter are parsed as UTC midnight, so format them with
  // UTC getters — local-time getters would show the previous day in the US.
  eleventyConfig.addFilter("formatDate", function(dateValue) {
    if (!dateValue) return '';
    const d = dateValue instanceof Date ? dateValue : new Date(dateValue);
    if (isNaN(d)) return '';
    return `${d.getUTCMonth() + 1}/${d.getUTCDate()}/${d.getUTCFullYear()}`;
  });

  // ISO 8601 / RFC 3339 date, used by the Atom feed and sitemap
  eleventyConfig.addFilter("isoDate", function(dateValue) {
    const d = dateValue instanceof Date ? dateValue : new Date(dateValue || Date.now());
    return isNaN(d) ? '' : d.toISOString();
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

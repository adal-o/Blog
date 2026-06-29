// Scheduled publishing for posts.
//
// A post "goes live" only once the current date has reached its `date` front
// matter. Before then it is hidden everywhere: it's excluded from every
// collection (so it won't appear in listings) and no page is generated for it
// (so the URL 404s).
//
// This applies in every mode, including local `npm run serve`, so what you see
// locally matches the live site exactly. To preview a scheduled post before its
// date, temporarily set its `date` to today.

const isScheduled = (data) =>
  data.date instanceof Date && data.date.getTime() > Date.now();

module.exports = {
  eleventyComputed: {
    // Keep scheduled posts out of collections.posts (and any other collection).
    eleventyExcludeFromCollections: (data) =>
      isScheduled(data) ? true : data.eleventyExcludeFromCollections,

    // Don't output a page for a scheduled post; otherwise fall back to the
    // default permalink Eleventy would have generated.
    permalink: (data) => (isScheduled(data) ? false : data.permalink),
  },
};

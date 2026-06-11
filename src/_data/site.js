// Site-wide data. A .js data file (instead of .json) lets baseUrl adapt to
// where the site is being served:
//   - `npm run serve` (local dev)  -> served at the domain root, baseUrl "/"
//   - `npm run build` (production) -> served from the GitHub Pages project
//     path, baseUrl "/AngelOutsider/"
// If you move to a custom domain, set baseUrl to "/" and update `url`.
const isLocalServe = process.env.ELEVENTY_RUN_MODE === "serve";

module.exports = {
  name: "ANGEL OUTSIDER",
  baseUrl: isLocalServe ? "/" : "/AngelOutsider/",
  // Absolute origin + path prefix of the deployed site, no trailing slash.
  // Used for canonical URLs, Open Graph tags, the Atom feed, and the sitemap.
  url: "https://angeloutsider.github.io/AngelOutsider",
  description: "Angel Outsider is a blog and digital archive by Amelie Wu and Raine Torres — an ode to Los Angeles and everything it has given two girls from the Valley.",
  author: "Amelie Wu and Raine Torres"
};

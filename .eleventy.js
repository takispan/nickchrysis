const eleventyNavigation = require('@11ty/eleventy-navigation');
const embedEverything = require("eleventy-plugin-embed-everything");

module.exports = function(eleventyConfig) {

  // plugins
  eleventyConfig.addPlugin(eleventyNavigation);
  eleventyConfig.addPlugin(embedEverything, {
    use: ['spotify', 'youtube']
  });

  // aliases

  // assets
  eleventyConfig.addPassthroughCopy('src/assets/**/main.js');
  eleventyConfig.addPassthroughCopy('src/assets/fonts/Montserrat-Regular.ttf');
  eleventyConfig.addPassthroughCopy('src/assets/fonts/Montserrat-Bold.ttf');

  // filters
  eleventyConfig.addFilter('log', value => {
    console.log(value)
  })

  // shortcodes
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_includes/layouts'
    }
  }
}
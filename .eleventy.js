const eleventyNavigation = require('@11ty/eleventy-navigation');
const embedEverything = require('eleventy-plugin-embed-everything');
const Image = require('@11ty/eleventy-img');

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
  eleventyConfig.addPassthroughCopy('src/assets/images/*');

  // filters
  eleventyConfig.addFilter('log', value => {
    console.log(value)
  })

  // shortcodes
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  eleventyConfig.addShortcode('image', async function (src, alt, width = ['auto'], sizes = '100vh') {
		let metadata = await Image(src, {
      width,
      urlPath: '/assets/images/',
      outputDir: 'dist/assets/images/'
		});

		let imageAttributes = {
			alt,
			sizes,
			loading: 'lazy',
			decoding: 'async',
		};

		// You bet we throw an error on a missing alt (alt="" works okay)
		return Image.generateHTML(metadata, imageAttributes);
	});

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_includes/layouts'
    }
  }
}
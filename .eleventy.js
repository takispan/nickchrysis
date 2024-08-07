module.exports = function(eleventyConfig) {
  // eleventyConfig.addShortcode("nkms_img", function (url, alt) {
	// 	return `<img src="${eleventyConfig.getFilter("url")(url)}" alt="${alt}">`;
	// });

  eleventyConfig.addPassthroughCopy('./src/style.css')
  eleventyConfig.addPassthroughCopy('./src/assets/')

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}
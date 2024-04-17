module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
  eleventyConfig.addWatchTarget("./src/assets/css/tailwind.css");
  eleventyConfig.addWatchTarget("tailwind.config.js");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addGlobalData("currentYear", function () {
    return new Date().getFullYear();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site",
    },
  };
};

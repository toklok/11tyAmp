const ampPlugin = require('@ampproject/eleventy-plugin-amp');

module.exports = function (eleventyConfig) {
  // eleventyConfig.setTemplateFormats([
  //   "liquid",
  //   "html",
  //   "txt",
  //   "png"
  // ]);
  eleventyConfig.addPlugin(ampPlugin, {
    ampCache: false,
    downloadAmpRuntime: true,
    ampRuntimeHost:
      process.env.ENV === 'prod' ? 'https://mindful.associates' : 'http://localhost:8080',
    experimentEsm: true,
    experimentImg: true,
    validation: false,
    imageOptimization: true,
    imageBasePath: `${__dirname}/src`
  });
  

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};

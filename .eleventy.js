// module.exports = function (eleventyConfig) {
//   eleventyConfig.setBrowserSyncConfig({
//     files: "./**/*.css", // "./public/static/**/*.css"
//   });

//   return {
//     dir: {
//       input: "src",
//       output: "public",
//     },
//   };
// };

module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
  });
};

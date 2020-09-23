module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "./",
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: '<url>',
  //       ws: true,
  //       changeOrigin: true
  //     },
  //     '/foo': {
  //       target: '<other_url>'
  //     }
  //   }
  // }
};

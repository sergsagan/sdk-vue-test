module.exports = {
  runtimeCompiler: true,
  publicPath: "./",
  outputDir: 'dist',
  assetsDir: 'src/assets',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/index.scss";`
      }
    }
  }
}
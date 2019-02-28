const path = require('path')
const withTypescript = require('@zeit/next-typescript')
const {exportPathMap} = require('nextjs-export-path-map')
if (process.env.ANALYZE){
  const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
}

const withCSS = require('@zeit/next-css')

module.exports = withTypescript(
  withCSS(
    {
      webpack(config, {buildId, dev}) {
        if (process.env.ANALYZE) {
          config.plugins.push(new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: 8888,
            openAnalyzer: true,
          }))

        }

        return config
      },
      cssModules: true,
      exportPathMap: exportPathMap.bind(null, path.join(__dirname, 'pages')),
      node: {fs: 'empty'},
    },
  ),
)

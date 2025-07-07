const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 开启 JS 多核压缩
const TerserPlugin = require("terser-webpack-plugin");
// 开启 css 压缩
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')


module.exports = {
  output: {
    path: join(__dirname, '../dist'),
    publicPath: '/',
    // 把 loader 编译的文件全部放入 scripts 文件夹中
    filename: 'scripts/[name].bundle.js',
    // 把图片资源放入 images 文件夹中
    assetModuleFilename: 'images/[name].[ext]',
  },
  performance: {
    maxAssetSize: 250000, // 最大资源大小250KB
    maxEntrypointSize: 250000, // 最大入口资源大小250KB
    hints: 'warning', // 超出限制时只给出警告
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true,
      }),
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
  // 排除 React 相关依赖
  externals: {
    'react': 'React',
    'react-dom/client': 'ReactDOMClient', 
    // 'react-dom': 'ReactDOM',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "DApp",
      filename: "index.html",
      template: resolve(__dirname, "../src/index-prod.html"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      // React 19 使用ESM模块，通过esm.sh CDN引入
      templateParameters: {
        REACT_CDN: `
          <script type="importmap">
          {
            "imports": {
              "react": "https://esm.sh/react@19.1.0",
              "react-dom/client": "https://esm.sh/react-dom@19.1.0/client",
            }
          }
          </script>
        `
        // REACT_CDN: `
        //   <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
        //   <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
        //   <script crossorigin src="https://unpkg.com/react-router-dom@6/dist/umd/react-router-dom.production.min.js"></script>
        // `
      }
    }),
  ],
};

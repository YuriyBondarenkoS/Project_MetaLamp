const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack');
const CopyPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const configObj = {
    splitChunks: {
      chunks: 'all'
    }
  };

  if (isProd) {
    configObj.minimizer = [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return configObj;
};

// const cssLoaders = (extra) => {
//   const loaders = [
//     {
//       loader: MiniCssExtractPlugin.loader,
//       options: {
//         hmr: isDev,
//       },
//     },
//     "css-loader",
//   ];

//   if (extra) {
//     loaders.push(extra);
//   }

//   return loaders;
// };

const fileName = (ext) => (isDev ? `[name].${ext}` : `[name].[fullhash:8].${ext}`);

const plugins = () => {
  const basePlugins = [
    // new CopyPlugin({
    //   patterns: [
    //     { from: "./components/header/images", to: "images" },
    //     { from: "./components/footer/images", to: "images" },
    //   ],
    //   options: {
    //     concurrency: 100,
    //   },
    // }),
    new HTMLWebpackPlugin({
      filename: path.resolve(__dirname, 'dist/index.html'),
      template : 'index.pug',
      inject: true,
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `./css/${fileName('css')}`
    }),
  ];

  if (isProd) {
    basePlugins.push(
      new ImageminPlugin({
        bail: false,
        cache: true,
        imageminOptions: {
          plugins: [
            ["gifsicle", { interlaced: true }],
            ["jpegtran", { progressive: true }],
            ["optipng", { optimizationLevel: 5 }],
            [
              "svgo",
              {
                plugins: [
                  {
                    removeViewBox: false
                  }
                ]
              }
            ]
          ]
        }
      })
    );
  }
  return basePlugins;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './main.js',
  output: {
    filename: `./js/${fileName('js')}`,
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  optimization: optimization(),
  plugins: plugins(),
  devtool: isProd ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev
            },
          },
          'css-loader'
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            },  
          },
          "css-loader",
          "resolve-url-loader",
          'sass-loader',
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        generator: {
          filename: '[hash:8][ext]'
        }
      },
      {
        test: /\.(?:|gif|png|jpg|jpeg|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `./images/${fileName('[ext]')}`,
              publicPath: "http://localhost:3000/",
              context: path.resolve(__dirname, "src/"),
              outputPath: './',
              useRelativePaths: true
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: `./fonts/${fileName('[ext]')}`,
          publicPath: "http://localhost:3000/",
          }
      },
    ]
  }
};
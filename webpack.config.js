const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const config = {
    mode: 'development',
    entry: './src/index.js',
    output: { 
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 5004,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {   test: /\.css$/, 
                use: [ 'style-loader', 'css-loader' ] 
            },
            {
                test: /\.(png|gif|svg|jpg|jpeg)$/i,
                use:[{
                    loader:'file-loader',
                    },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
      }
}

module.exports = config;

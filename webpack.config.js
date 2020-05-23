const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CSSExtractPlugin = require('mini-css-extract-plugin')

const PAGES = [
    {
        template: './pug/pages/home/index.pug',
        filename: './index.html'
    },
    {
        template: './pug/pages/about/about.pug',
        filename: './about.html'
    }
]

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 4200
    },
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        ...PAGES.map((page) => new HTMLPlugin(page)),
        new CleanWebpackPlugin(),
        new CSSExtractPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    CSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: { pretty: true }
            },
            {
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: 'file-loader',
				options: {
				  name: '[name].[ext]'
				},
			}
        ]
    }
}
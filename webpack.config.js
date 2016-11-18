/**
 * Created by user on 2016/11/17.
 */
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    // 插件项
    plugins: [commonsPlugin],
    // 页面入口文件配置
    entry: {
        index: './src/js/page/index.js',
        component: './src/js/page/component.js'
    },
    // 入口文件输出配置
    output: {
        path: 'dist/js/page',
        filename: '[name].js'
    },
    module: {
        // 加载器配置
        loaders: [
            // .css文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            // .js文件使用 jsx-loader 来编译处理
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            // .scss文件使用style-loader、css-loader和sass-loader来编译处理
            // loader可以省略不写，多个loader之间用!连接
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
            // 图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            // url-loader将样式中引用到的图片转为模块来处理，使用该加载器需要先进性安装：
            // npm install url-loader --save-dev
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    // 其他解决方案配置
    resolve: {
        // 从这里查找module
        root: 'E:/myproject/node_modules', // 绝对路径
        // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss'],
        // 模块别名定义，方便后续直接引用别名，无须多谢长长的地址
        alias: {
            AppStore: 'js/stores/AppStores.js', // 后续直接 require('AppStore') 即可
            ActionType: 'js/actions/ActionType.js',
            AppAction: 'js/actions/AppAction.js'
        }
    }
};










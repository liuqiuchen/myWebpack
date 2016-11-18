/**
 * Created by user on 2016/11/17.
 */
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    // �����
    plugins: [commonsPlugin],
    // ҳ������ļ�����
    entry: {
        index: './src/js/page/index.js',
        component: './src/js/page/component.js'
    },
    // ����ļ��������
    output: {
        path: 'dist/js/page',
        filename: '[name].js'
    },
    module: {
        // ����������
        loaders: [
            // .css�ļ�ʹ�� style-loader �� css-loader ������
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            // .js�ļ�ʹ�� jsx-loader �����봦��
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            // .scss�ļ�ʹ��style-loader��css-loader��sass-loader�����봦��
            // loader����ʡ�Բ�д�����loader֮����!����
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
            // ͼƬ�ļ�ʹ�� url-loader ������С��8kb��ֱ��תΪbase64
            // url-loader����ʽ�����õ���ͼƬתΪģ��������ʹ�øü�������Ҫ�Ƚ��԰�װ��
            // npm install url-loader --save-dev
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    // ���������������
    resolve: {
        // ���������module
        root: 'E:/myproject/node_modules', // ����·��
        // �Զ���չ�ļ���׺������ζ������requireģ�����ʡ�Բ�д��׺��
        extensions: ['', '.js', '.json', '.scss'],
        // ģ��������壬�������ֱ�����ñ����������л�����ĵ�ַ
        alias: {
            AppStore: 'js/stores/AppStores.js', // ����ֱ�� require('AppStore') ����
            ActionType: 'js/actions/ActionType.js',
            AppAction: 'js/actions/AppAction.js'
        }
    }
};










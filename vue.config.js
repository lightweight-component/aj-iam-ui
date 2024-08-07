const path = require('path');

module.exports = {
    publicPath: './', // vue_cli 打包后的项目，默认使用的是绝对路径。改为相对路径
    runtimeCompiler: true,
    indexPath: "index.html",
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, '.\\node_modules\\@ajaxjs\\util\\dist\\style\\common-functions.less')]
        }
    },
    lintOnSave: true,
    devServer: {
        overlay: {
            warnings: true,
            error: true
        }
    },
    chainWebpack: config => {
        config.module.rule('images').set('parser', {
            dataUrlCondition: {
                maxSize: 15 * 1024 // 4KiB 内联文件的大小限制
            }
        });
    }
};
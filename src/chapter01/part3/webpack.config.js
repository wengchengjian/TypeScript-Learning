//
const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//webpack中所有的配置信息都应该写在module.exports中
module.exports = {
    //指定入口文件
    entry: "./src/index.ts",

    //指定打包文件路径
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    //指定webpack打包时要使用的模块
    module: {
        //指定要加载的规则
        rules: [{
            //test指定的是规则生效的文件
            test: /\.ts$/,
            //要使用loader
            use: [
                // {
                //     //设置加载器
                //     loader: "babel-loader",
                //     //设置option
                //     options: {
                //         //设置预定义的环境
                //         presets: [
                //             [
                //                 "@babel/preset-env",
                //                 {
                //                     //要兼容的浏览器
                //                     targets: {
                //                         chrome: "88",
                //                     },
                //                     corejs: "3",
                //                     useBuildIns: "usage",
                //                 },
                //             ],
                //         ],
                //     },
                // },
                "ts-loader",
            ],
            //要排除的文件
            exclude: /node_modules/,
        }, ],
    },
    //配置webpack插件
    plugins: [
        new HTMLWebpackPlugin({ template: "./src/index.html" }),
        new CleanWebpackPlugin(),
    ],

    mode: "development",
    //用来设置引用模块
    resolve: {
        extensions: [".ts", ".js"],
    },
};
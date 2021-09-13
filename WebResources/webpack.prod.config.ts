import { Configuration } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
import merge from "webpack-merge";
import common from "./webpack.common.config";

export default (env: any, args: any): Configuration => {

    let analyzerMode = "static";
    if (env.ci === "true") {
        analyzerMode = "disabled"
    }

    const config = merge(common, {
        mode: "production",
        plugins: [
            new CleanWebpackPlugin(),
            new BundleAnalyzerPlugin({
                analyzerMode: analyzerMode,
                reportFilename: "../dist/report.html"
            })
        ]
    });

    return config;
};
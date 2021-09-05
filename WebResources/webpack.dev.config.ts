import { Configuration } from "webpack";
import path from "path";
import merge from "webpack-merge";
import common from "./webpack.common.config"

const config: Configuration = merge(common,
    {
        mode: "development",
        output: {
            publicPath: "/",
        },
        devtool: "inline-source-map",
        devServer: {
            static: path.join(__dirname, "build"),
            historyApiFallback: true,
            port: 4000,
            open: true,
            hot: true
        },
    });

export default config;
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import path from "path";

const common: Configuration = {
    entry: {
        page1: "./src/pages/page1.tsx",
        page2: "./src/pages/page1.tsx",
        main: "./src/main.ts",
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].js",
        publicPath: "",
        library: "FixRM"
    },
    optimization: {
        splitChunks: {
            chunks(chunk) {
                // exclude `main`
                return chunk.name !== "main";
            },
            name: "shared"
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/pages/page1.html",
            filename: "page1.html",
            excludeChunks: ["main"]
        }),
        new HtmlWebpackPlugin({
            template: "src/pages/page2.html",
            filename: "page2.html",
            excludeChunks: ["main"]
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
        }),
        new CleanWebpackPlugin()
    ]
};

export default common;
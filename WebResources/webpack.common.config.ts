import { Configuration } from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from "eslint-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

import { pages } from "./pages";

/*
 * This is entry point for entire project build
 * Our output consists of HTML web resources that are generated from "pages"
 * and form/ribbon scripts bundle
 */
const entry = pages.reduce<{ [index: string]: string }>(
    (config, page) => {
        config[page] = `./src/pages/${page}.tsx`;
        return config
    },
    {
        "main": "./src/main.ts"
    }
);

/*
 * This set of plugins is requred to generate html file for each page
 */
const htmlPlugins = pages.map((page) => {
    return new HtmlWebpackPlugin({
        template: `./src/pages/${page}.html`,
        filename: `${page}.html`,
        excludeChunks: ["main"]
    })
});

const common: Configuration = {
    entry: entry,
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
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
        }),

        ...htmlPlugins
    ]
};

export default common;
import { Configuration } from "webpack";
import merge from "webpack-merge";
import common from "./webpack.common.config"

const config: Configuration = merge(common, {
    mode: "production"
});

export default config;
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: "development",
    target: "web",

    entry: {
        main: "./src/main.ts",
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },

    plugins: [
        // new webpack.optimize.ModuleConcatenationPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "public"),
                    to: path.resolve(__dirname, "build")
                }
            ]
        }),
    ]
};

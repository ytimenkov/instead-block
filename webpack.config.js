const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: "development",
    target: "web",

    entry: {
        main: "./src/main.ts",
        instead: "./lib/instead-js/index.js"
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            "instead": path.resolve(__dirname, "lib/instead"),
            "lua.vm.js$": path.resolve(__dirname, "lib/weblua/lua.vm.js"),
            "instead-js": path.resolve(__dirname, "lib/instead-js"),
            "playground_xml": path.resolve(__dirname, "data/playground.xml"),
        }
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /.html$/, loader: "html-loader" },
            { test: /.xml$/, loader: "file-loader" },
        ]
    },

    plugins: [
        // new webpack.optimize.ModuleConcatenationPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "public"),
                    to: path.resolve(__dirname, "build")
                },
                {
                    from: path.resolve(__dirname, "lib/instead"),
                    to: path.resolve(__dirname, "build"),
                    globOptions: {
                        ignore: ["*.js"]
                    }
                },
            ]
        }),
    ]
};

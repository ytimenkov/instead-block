const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    target: "web",

    entry: {
        main: "./src/main.ts",
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].[contenthash].js",
    },

    optimization: {
        moduleIds: "hashed",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
                instead: {
                    test: /[\\/]lib[\\/]/,
                    name: "instead-js",
                    chunks: "all",
                }
            },
        },
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            "instead": path.resolve(__dirname, "lib/instead"),
            "lua.vm.js$": path.resolve(__dirname, "lib/weblua/lua.vm.js"),
            "instead-js": path.resolve(__dirname, "lib/instead-js"),
            "data": path.resolve(__dirname, "data"),
        }
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader", exclude: [/node_modules/, /lib/], },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /.html$/, loader: "html-loader" },
            {
                test: /.xml$/,
                oneOf: [
                    { resource: /playground.xml$/, loader: "file-loader" },
                    {
                        loader: "html-loader",
                        options: {
                            esModule: true,
                        },
                    },
                ]
            },
        ]
    },

    plugins: [
        // new webpack.optimize.ModuleConcatenationPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({

        }),
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
    ],
};

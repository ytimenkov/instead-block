import * as CopyPlugin from "copy-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";


module.exports = {
    devServer: {
        compress: true,
    },

    resolve: {
        alias: {
            instead: path.resolve(__dirname, "lib/instead"),
            "lua.vm.js$": path.resolve(__dirname, "lib/weblua/lua.vm.js"),
            "instead-js": path.resolve(__dirname, "lib/instead-js"),
            data: path.resolve(__dirname, "data"),
        }
    },

    module: {
        rules: [
            { test: /\.(png|svg|jpg|gif)$/, use: ["file-loader"], },
            { test: /.html$/, loader: "html-loader" },
            { test: /.lua$/, loader: "raw-loader" },
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
        new CopyPlugin({
            patterns: [
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
} as webpack.Configuration;

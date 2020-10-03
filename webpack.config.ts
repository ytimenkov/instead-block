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
            data: path.resolve(__dirname, "data"),
        }
    },

    module: {
        rules: [
            { test: /\.(png|svg|jpg|gif)$/, use: ["file-loader"], },
            { test: /.html$/, loader: "html-loader" },
            { test: /.lua$/, loader: "raw-loader" },
            { test: /.pegjs$/, loader: path.resolve(__dirname, "pegjs-loader.ts"), },
            { test: /.xml$/, loader: "file-loader" },
        ]
    },

    plugins: [
    ],
} as webpack.Configuration;

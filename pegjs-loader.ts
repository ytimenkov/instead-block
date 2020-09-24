import * as webpack from "webpack";
import { generate, OutputFormatUmd } from "pegjs";

export default function loader(this: webpack.loader.LoaderContext, source: string/* | Buffer*/): string | Buffer | void | undefined {
    const options: OutputFormatUmd = {
        output: "source",
        format: "umd",
    };
    return generate(source, options);
}

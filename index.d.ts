declare module "*.xml" {
    const content: string;
    export default content;
}

declare module "*.pegjs" {
    export interface Parser {
        parse(input: string, options?: ParserOptions): any;

        SyntaxError: any;
    }
    const parser: Parser;
    export default parser;
}

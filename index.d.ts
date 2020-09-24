declare module "instead-js/app/game";
declare module "instead-js/app/ui";
declare module "instead-js/app/i18n";
declare module "instead-js/app/instead";
declare module "instead-js/app/menu";
declare module "instead-js/app/vfs";
declare module "instead-js/lua/interpreter";

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

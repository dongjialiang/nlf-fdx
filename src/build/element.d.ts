export declare class Template {
    tag: string;
    template: string;
    constructor(tag: string, template: string);
}
export declare const creatTemplate: <T extends {}>(tagName: string) => (strings: TemplateStringsArray, ...args: T[]) => {
    tag: string;
    template: string;
};

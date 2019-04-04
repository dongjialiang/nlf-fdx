export class Template {
    tag: string;
    template: string;
    constructor(tag: string, template: string) {
        this.tag = tag;
        this.template = template;
    }
}
export const creatTemplate = <T extends {}>(tagName: string) => (strings: TemplateStringsArray, ...args: T[]) => ({
    tag: tagName,
    template: strings.reduce((acc: string, currentString: string, index: number) =>
        acc + currentString + (args[index] || ''), '',
    ),
});

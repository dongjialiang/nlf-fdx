declare class Dom {
    dom: null | Element;
    constructor(tagName: string);
    clone(boolean: boolean): void;
    tempHTML(content: string, data: any): Element | null;
}
declare const $: (selectors: string) => Element | null;

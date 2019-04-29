declare class Dom {
    dom: null | Element;
    constructor(tagName: string);
    clone(boolean: boolean): void;
    tempHTML(content: string, data: any): DocumentFragment;
}
declare const $: (selectors: string) => Element | null;

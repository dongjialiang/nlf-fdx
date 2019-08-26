interface HtmlCache {
    [key: string]: HTMLElement;
}
declare const htmlCache: HtmlCache;
declare const memoizehtml: (tag: string) => HTMLElement;
declare const setText: (element: Node | HTMLElement, text: string | number) => void;
declare const objToString: (obj: any) => any;
declare const setAttr: (element: any, prop: string, value: string | void | (() => {})) => void;
declare const parseObject: (element: any, args: any) => void;
declare const parseArray: (element: any, args: any[]) => void;
declare const el: (tag: any, ...args: any[]) => Node;
declare const isNode: (arg: Node) => number;
declare const addEvent: (element: Node | HTMLElement, type: string, listener: () => {}) => void;
declare let a: number;
declare const mount: (parent: Node | HTMLElement, child: Text | HTMLElement | DocumentFragment) => void;

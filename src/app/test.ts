interface Props {
    [key: string]: string | Props | (() => {});
}
interface HtmlCache {
    [key: string]: HTMLElement;
}
const htmlCache: HtmlCache = {}; // 用于缓存创建的节点
const memoizehtml = (tag: string) => htmlCache[tag] || (htmlCache[tag] = document.createElement(tag));
// 设置文本
const setText = (element: HTMLElement | Node, text: string) => {
    // innerHTML会保留格式, 不用
    // element.textContent = text; // 用于更改内容
    element.appendChild(document.createTextNode(text));
};
// 把对象拼接成字符串
const objToString = (obj: any): any => {
    let acc = '';
    let value;
    for (let index = 0, keys = Object.keys(obj), length = keys.length; index < length; index++) {
        value = obj[keys[index]];
        if (value instanceof Object) {
            return objToString(value);
        }
        acc += `${keys[index]}: ${value};`;
    }
    return acc;
};
// 设置属性名称和值
const setAttr = (
    element: any,
    prop: string,
    value: void | string | Props | (() => {}),
) => {
    if (value === null || value === undefined || value.length === 0) {
        return;
    }
    element.setAttribute(prop, value);
};
const parseObject = (
    element: any,
    args: any,
) => { // 解析对象
    for (let index = 0, keys = Object.keys(args); index < keys.length; index++) {
        if (args[keys[index]] instanceof Function) {
            setAttr(element, keys[index], `${(args[keys[index]].name)}()`);
        } else if (args[keys[index]] instanceof Object) {
            setAttr(element, keys[index], objToString(args[keys[index]]));
        } else {
            setAttr(element, keys[index], args[keys[index]]);
        }
    }
};
const parseArray = (
    element: any,
    args: any[],
) => { // 解析数组
    for (let index = 0, length = args.length; index < length; index++) {
        const argType = typeof args[index];
        const arg = args[index];
        if (argType === 'string') {
            setText(element, arg);
        } else if (isNode(arg)) {
            mount(element, arg);
        } else if (arg instanceof Array) {
            parseArray(element, arg);
        } else if (arg instanceof Object) {
            parseObject(element, arg);
        }
    }
};
// 判断元素和属性关系并设置属性
const el = (
    tag: any,
    ...args: any[]
): Node => {
    // console.log(arguments); // 使用箭头函数不能用arguments参数
    let element;
    const type = typeof tag;
    if (tag === null || tag === undefined || tag.length === 0) {
        throw new Error('At least one argument required'); // 最少要有一个参数
    } else if (type === 'string') { // 创建或克隆节点
        element = memoizehtml(tag).cloneNode(false);
    } else if (isNode(tag)) { // 克隆节点
        element = tag.cloneNode(false);
    }
    parseArray(element, args);
    return element; // 返回Node对象
};
const isNode = (arg: Node): number => arg && arg.nodeType; // 返回节点或者
const addEvent = (element: Node | HTMLElement, type: string, listener: (() => {})) => {
    element.addEventListener(type, listener);
};
const mount = (parent: HTMLElement, child: HTMLElement) => { // 挂载子节点到父节点上
    parent.appendChild(child);
};
const $ = (selectors: string) => document.querySelector(selectors); // 查询选择器

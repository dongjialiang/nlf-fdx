"use strict";
const htmlCache = {};
const memoizehtml = (tag) => htmlCache[tag] || (htmlCache[tag] = document.createElement(tag));
const setText = (element, text) => {
    mount(element, document.createTextNode(text.toString()));
};
const objToString = (obj) => {
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
const setAttr = (element, prop, value) => {
    if (value === null || value === undefined || value.length === 0) {
        return;
    }
    element.setAttribute(prop, value);
};
const parseObject = (element, args) => {
    for (let index = 0, keys = Object.keys(args); index < keys.length; index++) {
        if (args[keys[index]] instanceof Function) {
            setAttr(element, keys[index], `${(args[keys[index]].name)}()`);
        }
        else if (keys[index] === 'style' && args[keys[index]] instanceof Object) {
            setAttr(element, keys[index], objToString(args[keys[index]]));
        }
        else {
            setAttr(element, keys[index], args[keys[index]]);
        }
    }
};
const parseArray = (element, args) => {
    for (let index = 0, length = args.length; index < length; index++) {
        const argType = typeof args[index];
        const arg = args[index];
        if (argType === 'string' || argType === 'number') {
            setText(element, arg);
        }
        else if (isNode(arg)) {
            mount(element, arg);
        }
        else if (arg instanceof Array) {
            parseArray(element, arg);
        }
        else if (arg instanceof Object) {
            parseObject(element, arg);
        }
    }
};
const el = (tag, ...args) => {
    let element;
    const type = typeof tag;
    if (tag === null || tag === undefined || tag.length === 0) {
        throw new Error('At least one argument required');
    }
    else if (type === 'string') {
        element = memoizehtml(tag).cloneNode(false);
    }
    else if (isNode(tag)) {
        element = tag.cloneNode(false);
    }
    parseArray(element, args);
    return element;
};
const isNode = (arg) => arg && arg.nodeType;
const addEvent = (element, type, listener) => {
    element.addEventListener(type, listener);
};
let a = 0;
const mount = (parent, child) => {
    if (parent !== child.parentNode) {
        parent.appendChild(child);
    }
};
//# sourceMappingURL=test.js.map
"use strict";
var htmlCache = {};
var memoizehtml = function (tag) { return htmlCache[tag] || (htmlCache[tag] = document.createElement(tag)); };
var setText = function (element, text) {
    element.appendChild(document.createTextNode(text));
};
var objToString = function (obj) {
    var acc = '';
    var value;
    for (var index = 0, keys = Object.keys(obj), length_1 = keys.length; index < length_1; index++) {
        value = obj[keys[index]];
        if (value instanceof Object) {
            return objToString(value);
        }
        acc += keys[index] + ": " + value + ";";
    }
    return acc;
};
var setAttr = function (element, prop, value) {
    if (value === null || value === undefined || value.length === 0) {
        return;
    }
    element.setAttribute(prop, value);
};
var parseObject = function (element, args) {
    for (var index = 0, keys = Object.keys(args); index < keys.length; index++) {
        if (args[keys[index]] instanceof Function) {
            setAttr(element, keys[index], (args[keys[index]].name) + "()");
        }
        else if (args[keys[index]] instanceof Object) {
            setAttr(element, keys[index], objToString(args[keys[index]]));
        }
        else {
            setAttr(element, keys[index], args[keys[index]]);
        }
    }
};
var parseArray = function (element, args) {
    for (var index = 0, length_2 = args.length; index < length_2; index++) {
        var argType = typeof args[index];
        var arg = args[index];
        if (argType === 'string') {
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
var el = function (tag) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var element;
    var type = typeof tag;
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
var isNode = function (arg) { return arg && arg.nodeType; };
var addEvent = function (element, type, listener) {
    element.addEventListener(type, listener);
};
var mount = function (parent, child) {
    parent.appendChild(child);
};
var $ = function (selectors) { return document.querySelector(selectors); };
//# sourceMappingURL=test.js.map
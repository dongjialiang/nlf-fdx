"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElement = (vnode) => {
    if (typeof vnode === 'string') {
        return document.createTextNode(vnode);
    }
    const element = document.createElement(vnode.tag);
    Object.keys(vnode.props).map((key) => {
        element.setAttribute(key, vnode.props[key.toString()]);
    });
    if (typeof vnode.children === 'string') {
        element.appendChild(exports.createElement(vnode.children));
    }
    if (vnode.children instanceof Array) {
        vnode.children.map((child) => {
            const childElement = exports.createElement(child);
            element.appendChild(childElement);
        });
    }
    return element;
};
//# sourceMappingURL=VNode.js.map
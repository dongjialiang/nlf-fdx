"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const h_1 = require("./h");
const VNode_1 = require("./VNode");
const a = h_1.h('ul', { class: 'list' }, [{
        tag: 'li',
        props: {},
        children: 'item-1',
    }, {
        tag: 'li',
        props: { class: 'list-item' },
        children: [{
                tag: 'span',
                props: {},
                children: 'item-2',
            }, {
                tag: 'span',
                props: {},
                children: 'item-3',
            }],
    }]);
exports.init = (selector) => {
    const app = document.querySelector(selector);
    if (app) {
        app.appendChild(VNode_1.createElement(a));
    }
};
//# sourceMappingURL=index.js.map
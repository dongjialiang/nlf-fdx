"use strict";
class Dom {
    constructor(tagName) {
        this.dom = $(tagName) || document.createElement(tagName);
    }
    clone(boolean) {
        if (this.dom) {
            this.dom.cloneNode(boolean);
        }
    }
    tempHTML(content, data) {
        const c = content.replace(/({{)(.*?)(}})/g, (s0, s1, s2, s3) => data[s2])
            .replace(/(f-if=')(.*?)(')/g, (s0, s1, s2, s3) => s2 === 'false' ? 'style="display: none"' : '');
        const range = document.createRange();
        const node = range.createContextualFragment(c);
        return node;
    }
}
const $ = (selectors) => document.querySelector(selectors);
//# sourceMappingURL=template.js.map
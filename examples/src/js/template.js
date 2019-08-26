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
        const c = content
            .replace(/({{)(.*?)(}})/g, (match, s1, s2, s3) => data[s2])
            .replace(/(f-if=')(.*?)(')/g, (match, s1, s2, s3) => s2 === 'false' ? 'style="display: none"' : '');
        console.log(c);
        const div = document.createElement('div');
        div.insertAdjacentHTML('afterbegin', c);
        return div.firstElementChild;
    }
}
const $ = (selectors) => document.querySelector(selectors);
//# sourceMappingURL=template.js.map
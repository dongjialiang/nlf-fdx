"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Template {
    constructor(tag, template) {
        this.tag = tag;
        this.template = template;
    }
}
exports.Template = Template;
exports.creatTemplate = (tagName) => (strings, ...args) => ({
    tag: tagName,
    template: strings.reduce((acc, currentString, index) => acc + currentString + (args[index] || ''), ''),
});

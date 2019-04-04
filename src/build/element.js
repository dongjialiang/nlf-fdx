var Template = (function () {
    function Template(tag, template) {
        this.tag = tag;
        this.template = template;
    }
    return Template;
}());
export { Template };
export var creatTemplate = function (tagName) { return function (strings) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return ({
        tag: tagName,
        template: strings.reduce(function (acc, currentString, index) {
            return acc + currentString + (args[index] || '');
        }, ''),
    });
}; };
//# sourceMappingURL=element.js.map
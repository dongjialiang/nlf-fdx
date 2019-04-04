export var createElement = function (vnode) {
    if (typeof vnode === 'string') {
        return document.createTextNode(vnode);
    }
    var element = document.createElement(vnode.tag);
    Object.keys(vnode.props).map(function (key) {
        element.setAttribute(key, vnode.props[key.toString()]);
    });
    if (typeof vnode.children === 'string') {
        element.appendChild(createElement(vnode.children));
    }
    if (vnode.children instanceof Array) {
        vnode.children.map(function (child) {
            var childElement = createElement(child);
            element.appendChild(childElement);
        });
    }
    return element;
};
//# sourceMappingURL=VNode.js.map
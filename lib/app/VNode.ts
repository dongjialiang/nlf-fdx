export interface Props {
    [key: string]: string;
}
export interface VNode {
    tag: string;
    props: Props;
    children: string | VNode[];
}
export const createElement = (vnode: (string | VNode)) => {
    if (typeof vnode === 'string') {
        return document.createTextNode(vnode);
    }
    // 创建元素
    const element = document.createElement(vnode.tag);
    // 设置元素属性
    Object.keys(vnode.props).map((key: string) => {
        element.setAttribute(key, vnode.props[key.toString()]);
    });
    // 创建子元素
    if (typeof vnode.children === 'string') {
        element.appendChild(createElement(vnode.children));
    }
    if (vnode.children instanceof Array) {
        vnode.children.map((child: string | VNode) => {
            const childElement = createElement(child);
            element.appendChild(childElement);
        });
    }
    return element;
};

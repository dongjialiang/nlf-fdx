import { h } from './h';
import { createElement } from './VNode';

const a = h('ul', { class: 'list' }, [{
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
export const init = (selector: string) => {
    const app = document.querySelector(selector);
    if (app) {
        app.appendChild(createElement(a));
    }
};

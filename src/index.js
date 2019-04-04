const h1 = el('h1', {class: 'black', id: 'title'}, 'nlf-fdx');
const div = el('div');
const p = el('p', 'hello');
const list = el('ul', {class: 'list', id: ''}, [el('li', '1'), el('li', '2')]);
const newList = el('ul', {class: 'new-list', id: null, style: {background: 'green', color: '#fff'}}, el('li', '3'));
const text = el('input', {type: 'text', value: 'input', id: 'input'}, {oninput: typing = () => console.log(`typing...${$('#input').value}`)});
const btn = el('button', {class: 'btn', id: 'submit', style: 'color: red; border-radius: 5px;'}, 'submit', {onclick: submit = () => window.alert('alert! submit fail.')});
const app = $('#app');
if (app) {
    mount(app, h1);
    mount(app, div);
    mount(div, list);
    mount(div, newList);
    mount(div, text);
    mount(div, btn);
}

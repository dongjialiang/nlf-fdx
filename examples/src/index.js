const app = new Dom('#app');
data = {
    name: 'user',
    num: 3,
    bool: false,
    lists: [
        {username: 'ljd', age: 27, sex: '男'},
        {username: 'ww', age: 19, sex: '女'},
        {username: 'll', age: 19, sex: '女'},
        {username: 'mm', age: 19, sex: '女'},
        {username: 'hh', age: 19, sex: '女'},
        {username: 'ff', age: 19, sex: '女'},
        {username: 'kk', age: 19, sex: '女'},
    ],
}
const text = `
<slot>
    <h1>Hello, {{name}}!!!</h1>
    <p>welcome to myhome page.</p>
    <span f-if='{{bool}}'>这是隐藏起来的内容</span>
    <ul>
        ${data.lists.map(list =>
            `<li>
                姓名: <span>${list.username}</span>,
                年龄: <span>${list.age}</span>,
                性别: <span>${list.sex}</span>
            </li>`).join('')}
    </ul>
</slot>
<style>
    span {
        display: inline-block;
        width: 1.8rem;
    } 
</style>
    `;
mount(app.dom, app.tempHTML(text, data));

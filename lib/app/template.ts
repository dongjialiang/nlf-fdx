class Dom {
    dom: null | Element;
    constructor(tagName: string) {
        this.dom = $(tagName) || document.createElement(tagName);
    }
    clone(boolean: boolean) {
        if (this.dom) {
            this.dom.cloneNode(boolean);
        }
    }
    tempHTML(content: string, data: any) {
        const c = content/* .replace(/(<.*?)(f-for='{{.*?of )(.*?)(}}'.*?>)/g, (match, s1, s2, s3, s4) => {
            const begin = content.match(`${match}`);
            const end = content.match(`/${s1.substring(1, s1.length - 1)}>`);
            let code = '';
            if (begin === null || begin === undefined || end === null) {
                return '';
            }
            console.log(code);
            return code;
        })
             */.replace(/({{)(.*?)(}})/g, (match, s1, s2, s3) => data[s2])
            .replace(/(f-if=')(.*?)(')/g, (match, s1, s2, s3) =>
                s2 === 'false' ? 'style="display: none"' : '')
            /* .replace(/[\r\t\n]/g, '')
            .replace(/    /g, '') */;
        console.log(c);
        const div = document.createElement('div');
        div.insertAdjacentHTML('afterbegin', c);
        /* const range = document.createRange();
        const node = range.createContextualFragment(c); */
        return div.firstElementChild;
    }
}
const $ = (selectors: string) => document.querySelector(selectors); // 查询选择器

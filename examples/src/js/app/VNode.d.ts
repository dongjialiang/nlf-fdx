export interface Props {
    [key: string]: string;
}
export interface VNode {
    tag: string;
    props: Props;
    children: string | VNode[];
}
export declare const createElement: (vnode: string | VNode) => Text | HTMLElement;

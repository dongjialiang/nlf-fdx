import { Props, VNode } from './VNode';
const h = (tag: string, props: Props = {}, children: VNode[] = []): VNode => ({
    tag,
    props,
    children,
});
export { h }

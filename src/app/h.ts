import { Props, VNode } from './VNode';
export const h = (tag: string, props: Props = {}, children: VNode[] = []): VNode => ({
    tag,
    props,
    children,
});

import {addClass, div, footer, p, text} from '../builders';

export default function bottom() {
    const name = p(text('Magda Gorna'));
    const content = addClass(div(name), 'content', 'is-centered');

    const container = addClass(div(content), 'container');

    return addClass(footer(container), 'footer');
}
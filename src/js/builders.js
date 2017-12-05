export function text (words) {
    return document.createTextNode(words);
}

export function div (...children) {
    return createElement('div', ...children);
}

export function article (...children) {
    return createElement('article', ...children);
}

export function button (...children) {
    return createElement('button', ...children);
}

export function footer (...children) {
    return createElement('footer', ...children);
}

export function span (...children) {
    return createElement('span', ...children);
}

export function h1 (...children) {
    return createElement('h1', ...children);
}

export function h3 (...children) {
    return createElement('h3', ...children);
}

export function i (...children) {
    return createElement('i', ...children);
}

export function nav (...children) {
    return createElement('nav', ...children)
}

export function ul (...children) {
    return createElement('ul', ...children)
}

export function section (...children) {
    return createElement('section', ...children)
}
export function li (...children) {
    return createElement('li', ...children)
}
export function p (...children) {
    return createElement('p', ...children)
}

export function img (source) {
    const image = createElement('img');
    image.src = source;
    return image;
}

export function createElement (type, ...children) {
    const newElement = document.createElement(type);
    children.forEach( child => newElement.appendChild(child));
    return newElement;
}

export function addClass (el, ...classNames) {
    const newElement = el.cloneNode(true);
    classNames.forEach( className => newElement.classList.add(className));
    return newElement;
}

export function addId(el, id) {
    const element = el.cloneNode(true);
    return Object.assign(element, {id})
}
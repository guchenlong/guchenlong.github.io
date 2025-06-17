// faster.js 提效工具

// 创建元素
function _create_element(obj) {
    const element = document.createElement(obj.tag);
    if (obj.id) {
        element.id = obj.id;
    }
    if (obj.className) {
        element.classList.add(obj.className);
    }
    if (obj.innerText) {
        element.innerText = obj.innerText;
    }
    if (obj.src) {
        element.src = obj.src;
    }
    if (obj.href) {
        element.href = obj.href;
    }
    if (obj.width) {
        element.width = obj.width;
    }
    if (obj.height) {
        element.height = obj.height;
    }
    if (obj.download) {
        element.download = obj.download;
    }
    if (obj.onclick) {
        element.onclick = obj.onclick;
    }
    if (obj.children) {
        for (let i = 0; i < obj.children.length; i++) {
            let item = obj.children[i];
            element.appendChild(_create_element(item));
        }
    }
    return element;
}

// 获取 id 元素
function _get_id(id) {
    return document.getElementById(id);
}

// 设置 id 元素的 innerHTML
function _set_innerHtml(id, html) {
    _get_id(id).innerHTML = html;
}
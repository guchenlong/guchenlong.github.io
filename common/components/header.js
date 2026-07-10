// 渲染 - 网站 - 名称
function renderHeaderComponent() {
    let element = document.createElement('div');
    // 组件 - 元素
    element.innerHTML = '顾晨龙的个人站';
    // 组件 - 样式
    element.style.width = '100%';
    element.style.height = '50px';
    element.style.borderBottom = '1px solid #ddd';
    element.style.lineHeight = '50px';
    element.style.textAlign = 'center';
    element.style.fontSize = '18px';
    element.style.cursor = 'pointer';
    // 组件 - 事件
    element.addEventListener('click', function () {
        window.open("https://guchenlong.github.io", "_blank");
    });
    document.querySelector('.website-name').appendChild(element);
}

// 渲染 - 页面 - 名称
function renderPageNameComponent(pageName) {
    let element = document.createElement('div');
    // 组件 - 元素
    element.innerHTML = pageName;
    // 组件 - 样式
    element.style.width = '100%';
    element.style.height = '50px';
    element.style.lineHeight = '50px';
    element.style.textAlign = 'center';
    element.style.fontSize = '16px';
    element.style.borderBottom = '1px solid #ccc';
    // 组件 - 事件
    element.addEventListener('click', function () {
        // window.open("https://guchenlong.github.io", "_blank");
    });
    document.querySelector('.page-name').appendChild(element);
}

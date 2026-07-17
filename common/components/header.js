// 渲染 - 网站 - 名称
function renderHeaderComponent() {
    let element = document.createElement('div');
    // 组件 - 元素
    element.innerHTML = '顾晨龙的个人网站';
    // 组件 - 样式
    element.classList.add('website-name');
    // 组件 - 事件
    element.addEventListener('click', function () {
        window.open("/", "_blank");
    });
    document.querySelector('.website-name').appendChild(element);
}

// 渲染 - 页面 - 名称
function renderPageNameComponent(pageName) {
    let element = document.createElement('div');
    // 组件 - 元素
    element.innerHTML = pageName;
    // 组件 - 样式
    element.classList.add('page-name');
    // 组件 - 事件
    element.addEventListener('click', function () {
        // window.open("https://guchenlong.github.io", "_blank");
    });
    document.querySelector('.page-name').appendChild(element);
}

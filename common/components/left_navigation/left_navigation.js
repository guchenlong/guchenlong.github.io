function renderLeftNavigation() {  // 渲染 - 左侧导航栏
    let left = document.getElementById("left");

    const list = [
        { "title": "首页", "link": "/" },
        { "title": "图片压缩", "link": "/pages/compress/image/index.html" },
        { "title": "字体压缩", "link": "/pages/compress/font/index.html" },
        { "title": "JSON 格式化", "link": "/pages/format/json/index.html" },
    ];

    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        render_element(item);
    }

    function render_element(item) {  // 渲染 - 左侧导航栏 - 元素
        let a = document.createElement("a");
        a.href = item.link;
        a.innerText = item.title;
        let br = document.createElement("br");
        left.appendChild(a);
        left.appendChild(br);
    }
}
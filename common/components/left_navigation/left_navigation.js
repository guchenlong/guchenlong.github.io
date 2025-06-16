// 渲染 - 左侧导航栏
function render_left_navigation() {
    console.log(window.innerWidth)

    if (window.innerWidth < 1000) {
        return;
    }

    let page_left = document.getElementById("page_left");

    const list = [
        { "title": "图片压缩", "link": "/" },
        // { "title": "首页", "link": "/" },
        // { "title": "图片压缩", "link": "/pages/compress/image/index.html" },
        // { "title": "字体压缩", "link": "/pages/compress/font/index.html" },
        { "title": "视频压缩", "link": "/pages/compress/video/index.html" },
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
        let br1 = document.createElement("br");
        page_left.appendChild(a);
        page_left.appendChild(br);
        page_left.appendChild(br1);
    }
}
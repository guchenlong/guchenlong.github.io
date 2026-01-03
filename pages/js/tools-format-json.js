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

// 初始化 - 百度统计
function init_baidu_statistics() {
    console.log("init baidu statistics");
    if (window.location.hostname === "guchenlong.github.io") {
        var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?625b644748b71c4eec887e2a8ba80945";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    }
}

// 渲染 - 左侧导航栏
function render_left_navigation() {
    console.log(window.innerWidth);

    if (window.innerWidth < 1000) {
        return;
    }

    let page_left = document.getElementById("page_left");

    const list = [
        { title: "图片压缩", link: "/" },
        // { "title": "首页", "link": "/" },
        // { "title": "图片压缩", "link": "/pages/compress/image/index.html" },
        // { "title": "字体压缩", "link": "/pages/compress/font/index.html" },
        { title: "视频压缩", link: "/pages/compress/video/index.html" },
        { title: "JSON 格式化", link: "/pages/format/json/index.html" },
    ];

    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        render_element(item);
    }

    function render_element(item) {
        // 渲染 - 左侧导航栏 - 元素

        // let a = document.createElement("a");
        // a.href = item.link;
        // a.innerText = item.title;

        let a = _create_element({
            tag: "a",
            className: "left_navigation_item",
            href: item.link,
            innerText: item.title,
        });

        // let br = _create_element({

        // })

        // let br = document.createElement("br");
        // let br1 = document.createElement("br");
        page_left.appendChild(a);
        // page_left.appendChild(br);
        // page_left.appendChild(br1);
    }
}

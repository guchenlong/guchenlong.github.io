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

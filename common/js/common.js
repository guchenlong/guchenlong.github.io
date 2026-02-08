// 百度统计 上报
function initBaiduTongji() {
    const host = window.location.hostname;
    if (host.includes("guchenlong")) {
        var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?625b644748b71c4eec887e2a8ba80945";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    }
}

// 跳转 页面
function jumpTo(url) {
    window.open(url);
}
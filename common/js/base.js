window.onload = function () {
    initBaiduStatistics(); // 初始化 百度统计
    // initHeaderComponent(); // 初始化 头部 组件
}

// 初始化 百度统计
function initBaiduStatistics() {
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

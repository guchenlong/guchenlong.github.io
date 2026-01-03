// 初始化 - 百度统计
function init_baidu_statistics() {
    console.log("init baidu statistics");
    if (window.location.hostname === "guchenlong.github.io") {
        // 仅线上生效
        // var _hmt = _hmt || [];
        // (function () {
        //     var hm = document.createElement("script");
        //     hm.src =
        //         "https://hm.baidu.com/hm.js?50c6c1ceac5a4df01e7db17eb06290a9";
        //     var s = document.getElementsByTagName("script")[0];
        //     s.parentNode.insertBefore(hm, s);
        // })();
        var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?625b644748b71c4eec887e2a8ba80945";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    }
}

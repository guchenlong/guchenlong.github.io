window.onload = function () {
    initHeaderComponent();
}

function initHeaderComponent() {
    var header = document.getElementsByTagName("header")[0];
    header.innerHTML = "顾晨龙的个人站";
    header.onclick = function () {
        window.location.href = "https://guchenlong.github.io/";
    }
}
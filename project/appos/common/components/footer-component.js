// 初始化 footer 组件
function initFooterComponent() {
    renderFooterComponent();  // 渲染 footer 组件
    markCurrentPage();  // 高亮当前页
}

// 渲染 footer 组件
function renderFooterComponent() {
    let footerElement = document.getElementsByTagName("footer")[0];
    footerElement.innerHTML = `
        <div><a href="./home.html">首页</a></div>
        <div><a href="./category.html">分类</a></div>
        <div><a href="./ai.html">AI</a></div>
        <div><a href="./ranking.html">排行榜</a></div>
        <div><a href="./recommend.html">推荐</a></div>
    `;

}

// 高亮当前页
function markCurrentPage() {
    let id = document.getElementsByTagName("footer")[0];
    let href = window.location.href;
    let currentPage = href.split("/").pop().split(".")[0];
    let footerLinks = id.querySelectorAll("div a");
    footerLinks.forEach(link => {
        if (link.getAttribute("href").includes(currentPage)) {
            link.style.color = "red"; // 高亮当前页链接
        }
    });
}
// 渲染 - 头部组件
function renderHeader() {
    renderHeaderTime()
}

// 渲染 - 头部组件 - 时间
function renderHeaderTime() {
    const headerElement = document.querySelector("header");
    headerElement.innerHTML = `
        <div id="header-time">
            <span id="header-time-value"></span>
        </div>
    `;
    // 日期：
    setInterval(() => {
        document.getElementById("header-time-value").innerHTML = new Date().toLocaleString();
    }, 1000)
}

// 渲染 - 底部 - 组件
function renderFooter(type) {
    const footerElement = document.querySelector("footer")
    footerElement.innerHTML = `
        <div class="footer-item" onclick="clickFooterItem('global')">全球</div>
        <div class="footer-item" onclick="clickFooterItem('china')">国内</div>
        <div class="footer-item" onclick="clickFooterItem('category')">分类</div>
        <div class="footer-item" onclick="clickFooterItem('ai')">AI</div>
    `;
    // 高亮 当前 项
    const footerItems = document.querySelectorAll(".footer-item");
    if (type == "global") {
        footerItems[0].style.color = "red";
    } else if (type == "china") {
        footerItems[1].style.color = "red";
    } else if (type == "category") {
        footerItems[2].style.color = "red";
    } else if (type == "ai") {
        footerItems[3].style.color = "red";
    }
}

// 点击 - 底部 - 组件
function clickFooterItem(type) {
    let url = "";
    switch (type) {
        case "global":
            url = "../global-ranking/global-ranking.html";
            break;
        case "china":
            url = "../china-ranking/china-ranking.html";
            break;
        case "category":
            url = "../category-ranking/category-ranking.html";
            break;
        case "ai":
            url = "../ai-ranking/ai-ranking.html";
            break;
        default:
            break;
    }
    window.location.href = url;
}
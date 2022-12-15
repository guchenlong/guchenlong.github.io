window.onload = function () {
    console.log(jsondata);
    init();
}

function init() {  // 初始化方法
    console.log('init from js');
    initItemListHTML();
    initItemListCss();
}

function initItemListHTML() {  // 渲染 - 时间戳 - 数组列表
    let itemListElement = document.getElementById("item-list");
    itemListElement.innerHTML = initItemListStr();
}

function initItemListStr() {  // 初始化 - 时间戳 - 数组数据
    let str = '';
    for (let i = 0; i < jsondata.length; i++) {
        let item = jsondata[i];
        str = `${ str }
            <div class='item'>
                <div class='itemLeft'>
                    <div class='itemLeftPoint'></div>
                    <div class='itemLeftLine'></div>
                </div>
                <div class='itemRight'>
                    <span class='itemRightTime'>${ item.time }</span>
                    <span class='itemRightLocation'>${ item.location }</span>
                    <span class='itemRightPeople'>${ item.people }</span>
                    <a class='itemRightEvent' href="https://www.yuque.com/guchenlong/scvtw0/ag7a6zn4ggg5hm9g?singleDoc# 《test》">${ item.event }</a>
                </div>
            </div>
        `;
    }
    return str;
}

function initItemListCss() {  // 初始化 css
    // item - css
    var itemElement = document.getElementsByClassName("item");
    for (let i = 0; i < itemElement.length; i++) {
        let item = itemElement[i];
        item.style.width = "100%";
        item.style.height = "80px";
        item.style.position = "relative";
    }
    // itemLeft - css
    var itemLeftElement = document.getElementsByClassName("itemLeft");
    for (let i = 0; i < itemLeftElement.length; i++) {
        let item = itemLeftElement[i];
        item.style.position = "relative";
        item.style.display = "flex"
    }
    // itemLeftPoint - css
    var itemLeftPointElement = document.getElementsByClassName("itemLeftPoint");
    for (let i = 0; i < itemLeftPointElement.length; i++) {
        let item = itemLeftPointElement[i];
        item.style.display = "inline-block";
        item.style.width = "5px";
        item.style.height = "5px";
        item.style.color = "#1677ff";
        item.style.border = "3px solid transparent";
        item.style.borderColor = "#1677ff";
        item.style.borderRadius = "50%";
    }
    // itemLeftLine - css
    var itemLeftLineElement = document.getElementsByClassName("itemLeftLine");
    for (let i = 0; i < itemLeftLineElement.length; i++) {
        let item = itemLeftLineElement[i];
        item.style.position = "absolute";
        item.style.left = "5px";
        item.style.top = "11px";
        item.style.width = "1px";
        item.style.height = "69px";
        item.style.background = "#ddd";
    }
    // itemRight - css
    var itemRightElement = document.getElementsByClassName("itemRight");
    for (let i = 0; i < itemRightElement.length; i++) {
        let item = itemRightElement[i];
        item.style.position = "absolute";
        item.style.left = "50px";
        item.style.top = "-2px";
    }
    // itemRightTime - css
    var itemRightTimeElement = document.getElementsByClassName("itemRightTime");
    for (let i = 0; i < itemRightTimeElement.length; i++) {
        let item = itemRightTimeElement[i];
        item.style.padding = "0 1vw";
        item.style.background = "rgb(255, 192, 203)";
        item.style.fontFamily = "微软雅黑";
        item.style.fontSize = "16px";
    }
    // itemRightLocation - css
    var itemRightLocationElement = document.getElementsByClassName("itemRightLocation");
    for (let i = 0; i < itemRightLocationElement.length; i++) {
        let item = itemRightLocationElement[i];
        item.style.padding = "0 1vw";
        item.style.background = "rgb(255, 250, 240)";
        item.style.fontFamily = "微软雅黑";
    }
    // itemRightPeople - css
    var itemRightPeopleElement = document.getElementsByClassName("itemRightPeople");
    for (let i = 0; i < itemRightPeopleElement.length; i++) {
        let item = itemRightPeopleElement[i];
        item.style.padding = "0 1vw";
        item.style.background = "#D3D3D3";
        item.style.fontFamily = "微软雅黑";
    }
    // itemRightEvent - css
    var itemRightEventElement = document.getElementsByClassName("itemRightEvent");
    for (let i = 0; i < itemRightEventElement.length; i++) {
        let item = itemRightEventElement[i];
        item.style.padding = "0 1vw";
        item.style.background = "#F5F5F5";
        item.style.fontFamily = "微软雅黑";
        item.style.marginLeft = "5px";
    }
}

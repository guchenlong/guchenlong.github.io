window.onload = function () {
    console.log(jsondata);
    init();
}

function init() {  // 初始化方法
    initItemListHTML();
}

function initItemListHTML() {  // 渲染 - 时间戳 - 数组列表
    let itemListElement = document.getElementById("item-list");
    itemListElement.innerHTML = initItemListStr();
}

function initItemListStr() {  // 初始化 - 时间戳 - 数组数据    
    let str = '';
    for (let i = 0; i < jsondata.length; i++) {
        let item = jsondata[i];
        if (item.range || item.event) {
            str = 
            `
                ${ str }
                ${ item.range && `<div class='range'>${ item.range }</div>` }
                <div class='item'>
                    <div class='itemLeft'>
                        <div class='itemLeftPoint'></div>
                        <div class='itemLeftLine'></div>
                    </div>
                    <div class='itemRight'>
                        <span class='itemRightTime'>${ item.time }</span>
                        <span class='itemRightLocation'>${ item.location }</span>
                        <a class='itemRightEvent' href=${ item.link } target="blank">${ item.event }</a>
                        <span class='itemRightPeople'>${ item.people }</span>
                    </div>
                </div>
            `;
        }
    }
    return str;
}

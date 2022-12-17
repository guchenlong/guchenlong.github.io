window.onload = function () {
    init();
}

function init() {  // 初始化方法
    initItemListHTML(-5000);
}

function initItemListHTML(range) {  // 渲染 - 时间戳 - 数组列表
    let itemListElement = document.getElementById("item-list");
    itemListElement.innerHTML = null;
    itemListElement.innerHTML = initItemListStr(range);
}

function initItemListStr(range) {  // 初始化 - 时间戳 - 数组数据
    let str = '';
    for (let i = 0; i < jsondata.length; i++) {
        let item = jsondata[i];
        if (range == -5000) {
            if (item.time >= -5000 && item.time <= -1000) {
                if (item.range || item.event) {
                    str = 
                    `
                        ${ str }
                        <div class='item'>
                            <div class='itemLeft'>
                                <div class='itemLeftPoint'></div>
                                <div class='itemLeftLine'></div>
                            </div>
                            <div class='itemRight'>
                                <span class='itemRightTime'>${ item.time }</span>
                                <span class='itemRightLocation'>${ item.location }</span>
                                <span class='itemRightEvent' onclick=jump('${ encodeURIComponent(item.link) }') href=${ item.link } target="blank">${ item.event }</span>
                                ${ item.people && (`<span class='itemRightPeople'>${ item.people }</span>`) }
                            </div>
                        </div>
                    `;
                }
            }
        } else {
            if (item.time >= range && item.time <= range + 999) {
                if (item.range || item.event) {
                    str = 
                    `
                        ${ str }
                        <div class='item'>
                            <div class='itemLeft'>
                                <div class='itemLeftPoint'></div>
                                <div class='itemLeftLine'></div>
                            </div>
                            <div class='itemRight'>
                                <span class='itemRightTime'>${ item.time }</span>
                                <span class='itemRightLocation'>${ item.location }</span>
                                <span class='itemRightEvent' onclick=jump('${ encodeURIComponent(item.link) }') href=${ item.link } target="blank">${ item.event }</span>
                                ${ item.people && (`<span class='itemRightPeople'>${ item.people }</span>`) }
                            </div>
                        </div>
                    `;
                }
            }
        }
    }
    return str;
}

function jump(url) {
    if (url) {
        window.open(decodeURIComponent(url));
    }   
}

function changeTabRange(range) {  // 点击 - 选项卡 - 切换
    initItemListHTML(range);
}

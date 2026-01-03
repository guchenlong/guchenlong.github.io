// faster.js 提效工具

// 创建元素
function _create_element(obj) {
    const element = document.createElement(obj.tag);
    if (obj.id) {
        element.id = obj.id;
    }
    if (obj.className) {
        element.classList.add(obj.className);
    }
    if (obj.innerText) {
        element.innerText = obj.innerText;
    }
    if (obj.src) {
        element.src = obj.src;
    }
    if (obj.href) {
        element.href = obj.href;
    }
    if (obj.width) {
        element.width = obj.width;
    }
    if (obj.height) {
        element.height = obj.height;
    }
    if (obj.download) {
        element.download = obj.download;
    }
    if (obj.onclick) {
        element.onclick = obj.onclick;
    }
    if (obj.children) {
        for (let i = 0; i < obj.children.length; i++) {
            let item = obj.children[i];
            element.appendChild(_create_element(item));
        }
    }
    return element;
}

// 获取 id 元素
function _get_id(id) {
    return document.getElementById(id);
}

// 设置 id 元素的 innerHTML
function _set_innerHtml(id, html) {
    _get_id(id).innerHTML = html;
}

// 添加 script 文件
// (function () {
//     const srcList = [
//         // "../../../../common/js/_.js",
//         "../../../../common/js/base.js",
//         "../../../../common/components/left_navigation/left_navigation.js"
//     ];
//     for (let i = 0; i < srcList.length; i++) {
//         let script = document.createElement('script');
//         script.src = srcList[i];
//         document.head.appendChild(script);
//     }
// })();

let canvas;
let file_size;
let img_width;
let img_height;

window.onload = function () {
    // init_baidu_statistics();  // 初始化 - 百度统计
    // render_left_navigation();  // 渲染 - 左侧导航栏
    listenerInputChange();  // 监听 - 输入元素
}

// 监听 - 输入元素
function listenerInputChange() {
    var file_input = _get_id("file_input");
    file_input.addEventListener("change", function () {
        // 压缩图片
        const file = this.files[0];
        file_size = file.size;

        clearElement();  // 清除元素
        renderInputImageSize(file_size);  // 渲染 - 输入元素

        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            var img = new Image();
            img.src = e.target.result;
            img.onload = function () {
                img_width = img.width;
                img_height = img.height;
                canvas = _create_element({
                    tag: 'canvas',
                    width: img_width,
                    height: img_height,
                });
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, img_width, img_height);
                var base64 = canvas.toDataURL("image/jpeg", 1);
                renderInputImage(base64);  // 渲染 - 输入元素
            }
        }

        function clearElement() {  // 清除元素
            _set_innerHtml("input_image", "")
            _set_innerHtml("input_image_size", "");
        }

        function renderInputImageSize(file_size) {  // 渲染 - 输入元素
            _get_id("input_image_size").innerText = `${file_size / 1000} kb`;
        }

        function renderInputImage(base64) {  // 渲染-输入元素
            _get_id("input_image").src = base64;
        }
    });
}

// 获取图片质量
function get_image_quality() {
    var image_quality_input = _get_id("image_quality_input").value || .9;
    return image_quality_input;
}

// 获取图片尺寸
function get_image_size() {
    var image_size_input = _get_id("image_size_input").value || 1;
    return image_size_input;
}

// 压缩图片
function compress_image() {
    _set_innerHtml("page_line2", "");  // 清除元素
    const list = ["webp", "jpeg", "png"];
    let quality = get_image_quality();
    let size = get_image_size();
    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        let base64 = canvas.toDataURL(`image/${item}`, quality);  // 格式压缩
        var img = new Image();
        img.src = base64;
        img.onload = function () {
            canvas = _create_element({
                tag: 'canvas',
                width: img.width * size,
                height: img.height * size,
            });
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img_width * size, img_height * size);
            base64 = canvas.toDataURL(`image/${item}`, get_image_quality());
            let blob = dataURItoBlob(base64);
            render_element(item, blob, base64, file_size)
        }
    }

    function dataURItoBlob(dataURI) {
        // 将Base64编码的URI转换为二进制数据
        const byteString = atob(dataURI.split(',')[1]);
        // 分离出MIME类型和文件数据
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // 创建8位无符号整型数组来存储数据
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        // 创建Blob对象
        return new Blob([ia], { type: mimeString });
    }

    // 渲染 - 元素
    function render_element(item, blob, base64, file_size) {
        _get_id("page_line2").appendChild(
            _create_element({
                tag: 'div',
                className: 'item',
                children: [
                    {
                        tag: 'img',
                        className: 'item_image',
                        src: base64,
                    },
                    {
                        tag: 'span',
                        className: 'item_span',
                        // innerText: `${item} size: ${blob.size / 1000} kb `,
                        innerText: `${blob.size / 1000} kb `,
                    },
                    {
                        tag: 'button',
                        className: 'item_button',
                        innerText: `${item}`,
                        // `${item} 节省 ${(file_size - blob.size) / 1000} kb ${((file_size - blob.size) / file_size).toFixed(4)}`;
                        onclick: function () {
                            download_image(base64, item);  // 下载 - 图片
                        }
                    },
                ],
            })
        )
    }

    // 下载 - 图片
    function download_image(data_url, item) {
        const a = _create_element({
            tag: 'a',
            href: data_url,
            download: `download_image.${item}`,
        });
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}
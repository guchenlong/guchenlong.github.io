window.onload = function() {
    var file_input = document.getElementById("file_input");
    file_input.addEventListener("change", function() {
        // 压缩图片
        const file = this.files[0];
        const file_size = file.size;

        clearElement();  // 清除元素
        renderInputImageSize(file_size);  // 渲染 - 输入元素
        
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            var img = new Image();
            img.src = e.target.result;
            img.onload = function() {
                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, img.width, img.height);
                var base64 = canvas.toDataURL("image/jpeg", 0.8);

                renderInputImage(base64);  // 渲染 - 输入元素
                compress_image(canvas, file_size);  // 压缩 - 图片
            }
        }

        function clearElement() {  // 清除元素
            document.getElementById("input_image").innerHTML = "";
            document.getElementById("input_image_size").innerText = "";
        }

        function renderInputImageSize(file_size) {  // 渲染 - 输入元素
            const input_image_size = document.getElementById("input_image_size");
            input_image_size.innerText = `${file_size / 1000} kb`;
        }

        function renderInputImage(base64) {  // 渲染-输入元素
            const input_image = document.getElementById("input_image");
            input_image.src = base64;
        }
    });
}

function compress_image(canvas, file_size) {
    const list = ["webp", "jpeg", "png"];

    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        let data_url = canvas.toDataURL(`image/${item}`);  // 格式压缩
        let blob = dataURItoBlob(data_url);
        render_element(item, blob, data_url, file_size)
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
        return new Blob([ia], {type: mimeString});
    }

    // 渲染 - 元素
    function render_element(item, blob, data_url, file_size) {
        // <div class="item">
            // <img src="data_url" class="item_image" />
            // <span>`${item} size: ${blob.size / 1000} kb `</span>
            // <button onclick="download_image(data_url, item)">下载</button>
        // </div>
        const parent = document.getElementById("page_line2");
        let div_element = document.createElement("div");
        div_element.classList.add("item");
        // 图片 <img src="data_url" class="item_image" />
        let img_element = document.createElement("img");
        img_element.src = data_url;
        img_element.classList.add("item_image");
        div_element.appendChild(img_element);
        // 类型 大小 <span>`${item} size: ${blob.size / 1000} kb `</span>
        let span_element = document.createElement("span");
        span_element.innerText = `${blob.size / 1000} kb`;
        div_element.appendChild(span_element);
        // 下载 <button onclick="download_image(data_url, item)">下载</button>
        let button_element = document.createElement("button");
        button_element.classList.add("item_button");
        button_element.innerText = `${item} 节省 ${(file_size - blob.size) / 1000} kb_${((file_size - blob.size) / file_size).toFixed(4)}`;
        button_element.onclick = function() {
            download_image(data_url, item);  // 下载 - 图片
        }
        div_element.appendChild(button_element);
        // 加入父元素
        parent.appendChild(div_element);
    }

    // 下载 - 图片
    function download_image(data_url, item) {
        const a = document.createElement("a");
        a.href = data_url;
        a.download = `download_image.${item}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}
function initAppComponent(appList, type) {
    let appListElement = document.getElementById("app-list");
    appListElement.innerHTML = "";
    appList.forEach(app => {
        appListElement.innerHTML += `
            <div
                class="app-item" 
                onclick="openApp('${app.urlScheme}')"
                style="width: 100%; height: 40px; margin: 10px 0; display: flex; align-items: center; background: #fdfbfb;"
            >
                <p style="width: 10%; text-align: center;">${app.ranking} </p>
                <img src="${app.icon}" style="width: 30px; height: 30px; margin: 0 20px;">
                <p style="width: 30%; text-align: center;">${app.name}</p>
                <p>${app.users}</p>
            </div>
        `;
    });
}

function openApp(urlScheme) {
    console.log("open app with url scheme: " + urlScheme);
    window.location.href = urlScheme;
}
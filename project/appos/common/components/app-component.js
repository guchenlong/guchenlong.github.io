function initAppComponent(appList) {
    let appListElement = document.getElementById("app-list");
    appListElement.innerHTML = "";
    appList.forEach(app => {
        appListElement.innerHTML += `
            <div class="app-item">
                <p>${app.ranking} </p>
                <img src="${app.icon}" style="width: 30px; height: 30px;">
                <p>${app.name}</p>
                <p>${app.users}</p>
            </div>
        `;
    });
}

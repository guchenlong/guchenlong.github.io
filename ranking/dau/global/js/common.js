function openApp(name) {
    console.log("openApp: " + name);
    let url = "";
    switch (name) {
        case "TikTok":
            url = "https://www.tiktok.com/";
            break;
        default:
            return;
    }
}
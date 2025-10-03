window.onload = function () {
    console.log("timeline.js loaded");
    // requestPv();
};

function requestPv() {
    // http://localhost:3000/visit_log/pv
    let host = `http://localhost:3000`;
    let path = "/visit_log/pv";
    let url = host + path;
    window
        .fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                url: window.location.href,
            }),
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
}

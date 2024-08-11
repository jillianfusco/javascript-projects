let actions = {
    google: "https://www.google.com/search",
    duckDuckGo: "https://duckduckgo.com",
    bing: "https:www.bing.com/search",
    ask: "https://www.ask.com/web"
}

function startSearchEngine(event) {
    const buttonSelected = document.querySelector('input[name=engine]:checked');
    const form = document.getElementById("searchForm");
    const query = document.getElementById("q");

    //window alert
    // if (query.value.trim() === "") {
    //     alert("Opps! You didn't enter anything to search for.");
    //     event.preventDefault();
    //     return;
    // } else if (!buttonSelected) {
    //     alert("Opps! You didn't select a search engine.");
    //     event.preventDefault();
    //     return;
    // }

    //error box
    const errorBox = document.getElementById("error-box");
    const errorMSg = document.getElementById("error-message");

    if (query.value.trim() === "") {
        errorMSg.innerHTML = "Opps! You didn't enter anything to search for.";
        event.preventDefault();
        return;
    } else if (!buttonSelected) {
        errorMSg.innerHTML = "Opps! You didn't select a search engine.";
        event.preventDefault();
        return;
    }


    let url = actions[buttonSelected.value];
    form.action = url;
}

window.addEventListener("load", function() {
    const form = document.getElementById("searchForm");
    form.addEventListener("submit", startSearchEngine)
})
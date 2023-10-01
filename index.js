
var lastTab = false;
var currentTab = false;

function tabClick(event) {
    currentTab = event.currentTarget;
    tabChangeFocus();
}

function tabChangeFocus() {
    currentTab.setAttribute("tabindex", "0");
    currentTab.setAttribute("aria-selected", true);
    currentTab.focus();
    if (lastTab && lastTab !== currentTab) {
        lastTab.setAttribute("tabindex", "-1");
        lastTab.setAttribute("aria-selected", false);
    }
    lastTab = currentTab;
    document.getElementById("html").hidden = true;
    document.getElementById("js").hidden = true;
    document.getElementById("css").hidden = true;
    const name = currentTab.dataset.name;
    document.getElementById(name).hidden = false;
}

function tabKeyDown(event) {
    var element = event.currentTarget;
    switch (event.key) {
        case "ArrowRight":
            if (element.nextElementSibling) {
                currentTab = element.nextElementSibling;
                tabChangeFocus();
            }
            break;
        case "ArrowLeft":
            if (element.previousElementSibling) {
                currentTab = element.previousElementSibling;
                tabChangeFocus();
            }
            break;
    }
}

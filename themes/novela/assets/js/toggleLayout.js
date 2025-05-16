document.getElementById("btnGrid").addEventListener("click", makeGrid);
document.getElementById("btnRows").addEventListener("click", makeRows);
window.addEventListener("resize", adjustListAtMobile);

document.getElementById("rows").style.fill = "var(--grey)";

let listRemoveWidth = window.matchMedia("(max-width: 735px)");
let listAddWidth = window.matchMedia("(min-width: 735px)");
let isList = false;

function adjustListAtMobile() {
    const articlesList = document.getElementById("articlesList");
    const collectionsList = document.getElementById("collectionsList");
    
    if (listRemoveWidth.matches) {
        if (articlesList) articlesList.classList.remove("articles-list-container-alt");
        if (collectionsList) collectionsList.classList.remove("articles-list-container-alt");
        applyExcerptGridStyle();
        applyDescriptionGridStyle();
    } else if (listAddWidth.matches && isList === true) {
        if (articlesList) articlesList.classList.add("articles-list-container-alt");
        if (collectionsList) collectionsList.classList.add("articles-list-container-alt");
        applyExcerptRowStyle();
        applyDescriptionRowStyle();
    }
}

function makeGrid() {
    const articlesList = document.getElementById("articlesList");
    const collectionsList = document.getElementById("collectionsList");
    
    if (articlesList) articlesList.classList.remove("articles-list-container-alt");
    if (collectionsList) collectionsList.classList.remove("articles-list-container-alt");
    
    document.getElementById("tiles").style.fill = "var(--primary)";
    document.getElementById("rows").style.fill = "var(--grey)";
    applyExcerptGridStyle();
    applyDescriptionGridStyle();
    isList = false;
}

function makeRows() {
    const articlesList = document.getElementById("articlesList");
    const collectionsList = document.getElementById("collectionsList");
    
    if (articlesList) articlesList.classList.add("articles-list-container-alt");
    if (collectionsList) collectionsList.classList.add("articles-list-container-alt");
    
    document.getElementById("rows").style.fill = "var(--primary)";
    document.getElementById("tiles").style.fill = "var(--grey)";
    applyExcerptRowStyle();
    applyDescriptionRowStyle();
    isList = true;
}

function applyExcerptGridStyle() {
    document.querySelectorAll(".article-excerpt").forEach(el => {
        el.style.display = "-webkit-box";
        el.style.webkitLineClamp = "2";
        el.style.webkitBoxOrient = "vertical";
        el.style.overflow = "hidden";
    });
}

function applyExcerptRowStyle() {
    document.querySelectorAll(".article-excerpt").forEach(el => {
        el.style.display = "block";
        el.style.webkitLineClamp = "unset";
        el.style.overflow = "visible";
    });
}

function applyDescriptionGridStyle() {
    document.querySelectorAll(".article-description").forEach(el => {
        el.style.display = "-webkit-box";
        el.style.webkitLineClamp = "2";
        el.style.webkitBoxOrient = "vertical";
        el.style.overflow = "hidden";
    });
}

function applyDescriptionRowStyle() {
    document.querySelectorAll(".article-description").forEach(el => {
        el.style.display = "block";
        el.style.webkitLineClamp = "unset";
        el.style.overflow = "visible";
    });
}

let btnNext = document.getElementById("slide-arrow-next")
let btnPrev = document.getElementById("slide-arrow-prev")
let pages = [document.getElementById("page1"),document.getElementById("page2"),document.getElementById("page3")]
let currentPageID = 0

btnNext.addEventListener("click", () => {
    pages[currentPageID].style.display='none';
    let nextPageID = (currentPageID+1)%3;
    pages[nextPageID].style.display='inherit';
    currentPageID = nextPageID;

})

btnPrev.addEventListener("click", ()=>{
    pages[currentPageID].style.display='none';
    let nextPageID = (currentPageID-1)>=0?(currentPageID-1):(3-1);
    pages[nextPageID].style.display='inherit';
    currentPageID = nextPageID;
})

document.getElementById("themeSwitcher").addEventListener("click", toggleTheme)

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
 }
 // Immediately invoked function to set the theme on initial load
 (function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
 })();
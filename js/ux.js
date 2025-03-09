// Hide/Show top bar when scrolling
const nav = document.querySelector(".nav-bar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add("top-bar-hidden");
    } else {
        nav.classList.remove("top-bar-hidden");
    }
        lastScrollY = window.scrollY;
});

// Show and hide menu button backend
function showMenu() {
    const controlMenu = document.querySelector('.control-menu');
    controlMenu.style.display = 'flex';
}
    
function hideMenu() {
    const controlMenu = document.querySelector('.control-menu');
    controlMenu.style.display = 'none';
}

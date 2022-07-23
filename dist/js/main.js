const menuBtn = document.querySelector(".menu-btn");
const line1 = document.querySelector(".menu-btn__line1");
const line2 = document.querySelector(".menu-btn__line2");
const line3 = document.querySelector(".menu-btn__line3");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        line1.classList.add("open");
        line2.classList.add("open");
        line3.classList.add("open");
        nav.classList.add("open");
        menuNav.classList.add("open");
        navItems.forEach(item => item.classList.add("open"));

        showMenu = true;
    }

    else {
        line1.classList.remove("open");
        line2.classList.remove("open");
        line3.classList.remove("open");
        nav.classList.remove("open");
        menuNav.classList.remove("open");
        navItems.forEach(item => item.classList.remove("open"));

        showMenu = false;
    }
}
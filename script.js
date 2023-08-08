// Nav menu toggle for responsive
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const nav = document.querySelector("nav");

    function toggleMenu() {
        menuToggle.classList.toggle("active");
        menu.classList.toggle("mobile");
        nav.classList.toggle("mobile");

        const menuMobile = document.querySelector(".menu.mobile");
        const menuMobileItems = menuMobile?.querySelectorAll("a");

        menuMobileItems?.forEach((item) => {
            item.addEventListener("click", toggleMenu);
        });
    }

    menuToggle.addEventListener("click", toggleMenu);
});

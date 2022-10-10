$(document).ready(function () {
    $(window).scroll(function () {
        let x = $(window).scrollTop();
        if (x > 80) {
            $(".header-topbar").css({
                "display": "none"
            })
            $('.header-container').addClass("active");
        }
        else {
            $('.header-container').removeClass('active');
            $(".header-topbar").css({
                "display": "block"
            })
        }
    });
});
let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector('.menu');
let menuitem = document.querySelector('.menu-items');
let body = document.querySelector(".body-display");
let html = document.querySelector("html");
menu.addEventListener("click", function () {
    // menu.classList.add("active")
    menuitem.classList.add('active');
    body.classList.add('active');
    html.style.overflow = "hidden";
});
menuBtn.addEventListener("click", function () {
    menuitem.classList.remove('active');
    body.classList.remove('active');
    html.style.overflow = "scroll";
});
body.addEventListener("click", function () {
    menuitem.classList.remove('active');
    body.classList.remove('active');
    html.style.overflow = "scroll";
});
let submenu = document.querySelectorAll('.submenu-link');
let answer = document.querySelector('.answer');
for (i = 0; i < submenu.length; i++) {
    submenu[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
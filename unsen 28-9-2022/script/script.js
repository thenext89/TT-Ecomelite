$(document).ready(function () {
    $('.product-content').hide();
    $('.product-content:first-child').fadeIn();
    $('.tab-list li').click(function () {
        $('.tab-list li').removeClass("active");
        $(this).addClass("active");
        let id = $(this).children('a').attr('href');
        $('.product-content').hide();
        $(id).fadeIn();
    })
    $(window).scroll(function () {
        let x = $(window).scrollTop();;
        if (x > 80) {
            $(header).addClass("active");
        }
        else {
            $(header).removeClass('active');
        }
    });
    function countdown() {
        let year = new Date('November 9, 2022 00:00:00').getTime();
        let yearNow = new Date().getTime();
        let result = year - yearNow;
        let day = 86400000;
        let d = Math.floor(result / day);
        let h = Math.floor((result % day) / 3600000);
        let m = Math.floor((result % 3600000) / 60000);
        let s = Math.floor((result % 60000) / 1000);
        let space = ' '
        $(".day").html(`${d}`);
        $(".hour").html(` ${h}`);
        $(".minute").html(` ${m}`);
        $(".second").html(` ${s}`);
    }
    setInterval(countdown,1000);
});
let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector('.menu');
let menuitem = document.querySelector('.menu-items');
let body = document.querySelector(".body-display");
menu.addEventListener("click", function () {
    // menu.classList.add("active")
    menuitem.classList.add('active')
    body.classList.add('active')
});
menuBtn.addEventListener("click", function () {
    menuitem.classList.remove('active')
    body.classList.remove('active')
});
body.addEventListener("click", function () {
    menuitem.classList.remove('active')
    body.classList.remove('active')
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
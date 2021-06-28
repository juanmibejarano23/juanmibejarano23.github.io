$(document).ready(function(){
    $(window).scroll(function(){
        // NAVBAR ONSCROLL 
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // SCROLLUP BUTTON SHOW/HIDE
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // SLIDE UP
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // TOOGLE MENU/NAVBAR
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // TYPING ANIMATION
    var typed = new Typed(".typing", {
        strings: ["CyberSec Enthusiast", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Ingeniero Electrónico"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false 
    });

    // owl carousel script
    //$('.carousel').owlCarousel({
    //    margin: 20,
    //    loop: true,
    //    autoplay: true,
    //    autoplayTimeOut: 2000,
    //    autoplayHoverPause: true,
    //    responsive: {
    //        0:{
    //            items: 1,
    //            nav: false
    //        },
    //        600:{
    //            items: 2,
    //            nav: false
    //        },
    //        1000:{
    //            items: 3,
    //            nav: false
    //        }
    //    }
    //});
});

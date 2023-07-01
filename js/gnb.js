// 마우스 호버시 클래스 생기고 없어지는 함수
$("document").ready(function () {
    $('.header').hover(function () {
        $(this).addClass("header_on");

    }, function () {
        $(this).removeClass("header_on");
    })
});

// 스크롤 해서 내려가면 gnb nav-sec 배경 사라지고 올라가면 다시 생기는 함수
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.header').addClass("nav-sec");
        $('.header').removeAttr('style');
    } else {
        $('.header').removeClass("nav-sec");
        $('.header').removeAttr('style');
    }
});

// main2 섹션으로 가면 gnb가 사라지지고 올라가면 다시 생기는 함수
var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    var mainSection = $('.main2').offset().top;
    var currentScrollPos = window.pageYOffset;

    if (mainSection < currentScrollPos) {
        $(".header").toggleClass('hide', prevScrollPos <= currentScrollPos);
        prevScrollPos = currentScrollPos;
    }
};

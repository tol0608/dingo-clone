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

// 스크롤 버튼
$(document).ready(function() {
    // main2에 내려가기전까지 버튼 숨기기
    $('.t-btn').hide();

    // 스크롤 이벤트 감지
    $(window).scroll(function() {
        // main2의 위치를 확인하여 버튼 보이기/숨기기
        var section2Offset = $('.main2').offset().top;
        if ($(window).scrollTop() > section2Offset) {
            $('.t-btn').fadeIn();
        } else {
            $('.t-btn').fadeOut();
        }
    });

    // 버튼 클릭 시 상단으로 스크롤
    $('.t-btn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});

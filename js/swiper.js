
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // 몇 개 보이게 할것인지
    effect: 'slide',
    centeredSlides: true,
    loopAdditionalSlides : 0,
    loopFillGroupWithBlank: false,
    spaceBetween: 20, // 각 요소 간 간격
    autoplay: {     // 자동슬라이드 (false-비활성화)
        delay: 2500, // 시간 설정
        disableOnInteraction: false
    },
    loop: true,
    allowTouchMove: false, // (false-스와이핑안됨)버튼으로만 슬라이드 조작이 가능

    breakpoints : {
        1600 : {
            slidesPerView: 5,
            spaceBetween: 50,
        },
        1300 : {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1080 : {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768 : {
            slidesPerView: 2,
            spaceBetween: 20,
        },

    }
});

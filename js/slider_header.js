const header_slider = new Swiper(".header-slider-container", {
    allowTouchMove: false,
    slidesPerView: 1,
    direction: 'horizontal',
    speed: 1000,
    loop: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".header-slider__pagination",
        clickable: true,
    },
})

new WOW().init();
const news_slider = new Swiper(".news-slider-container", {
    direction: "horizontal",
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 700,

    pagination: {
        el: ".news-slider-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".button-control_next",
        prevEl: ".button-control_prev",
    },

    breakpoints: {

        1025: {
            slidesPerView: 2,
        },

        1361: {
            slidesPerView: 3,
        },

    }
})
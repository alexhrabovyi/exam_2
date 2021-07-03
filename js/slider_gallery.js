const gallery_slider = new Swiper(".gallery-slider-container", {
    direction: "horizontal",
    grabcursor: true,
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 1000,
    loop: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".gallery-slider-pagination",
        clickable: true,
        bulletClass: "swiper-pagination-bullet_gallery",
        bulletActiveClass: "swiper-pagination-bullet-active_gallery",
    },
})
const news_slider_img = document.querySelectorAll(".news-slider-slide__img");
const news_modal = document.querySelector(".news-modal");
const news_modal__img = document.querySelector(".news-modal__img");

const img_by_id_arr = [
    {
        id: "slide_1",
        img: "img/news/slider_1.png",
    },

    {
        id: "slide_2",
        img: "img/news/slider_2.png",
    },

    {
        id: "slide_3",
        img: "img/news/slider_3.png",
    },

    {
        id: "slide_4",
        img: "img/news/slider_1.png",
    },

    {
        id: "slide_5",
        img: "img/news/slider_1.png",
    },

    {
        id: "slide_6",
        img: "img/news/slider_1.png",
    },

    {
        id: "slide_7",
        img: "img/news/slider_1.png",
    },
];

for (let i = 0; i < news_slider_img.length; i++) {

    news_slider_img[i].addEventListener("click", () => {

        news_modal.classList.remove("hidden");

        let img_id = news_slider_img[i].id;

        for (let item of img_by_id_arr) {

            if (item.id === img_id) {
                news_modal__img.src = item.img;
            }
        }
    });
};

news_modal.addEventListener("click", () => {
    news_modal.classList.add("hidden");
});
const img_block = document.querySelectorAll(".gallery-img-container__img-block");
const gallery_slide_img = document.querySelectorAll(".gallery-slider-slide__img");
const gallery_modal = document.querySelector(".gallery-modal");
const gallery_modal_img = document.querySelector(".gallery-modal__img");

const gallery_img_by_id_arr = [
    {
        id: "gallery-img-1",
        mob_id: "gallery-mob-img-1",
        src: "img/gallery/img_1.jpg",
    },

    {
        id: "gallery-img-2",
        mob_id: "gallery-mob-img-2",
        src: "img/gallery/img_2.png",
    },

    {
        id: "gallery-img-3",
        mob_id: "gallery-mob-img-3",
        src: "img/gallery/img_3.png",
    },

    {
        id: "gallery-img-4",
        mob_id: "gallery-mob-img-4",
        src: "img/gallery/img_4.png",
    },

    {
        id: "gallery-img-5",
        mob_id: "gallery-mob-img-5",
        src: "img/gallery/img_5.png",
    },
];

for (let i = 0; i < img_block.length; i++) {

    img_block[i].addEventListener("click", () => {

        gallery_modal.classList.remove("hidden");

        let id = img_block[i].id;

        for (let item of gallery_img_by_id_arr) {

            if (item.id === id) {
                gallery_modal_img.src = item.src;
            }
        }
    })
};

for (let i = 0; i < gallery_slide_img.length; i++) {

    gallery_slide_img[i].addEventListener("click", () => {

        gallery_modal.classList.remove("hidden");

        let id = gallery_slide_img[i].id;
        console.log(id);

        for (let item of gallery_img_by_id_arr) {

            if (item.mob_id === id) {
                gallery_modal_img.src = item.src;
            }
        }
    })
};

gallery_modal.addEventListener("click", () => {
    gallery_modal.classList.add("hidden");
});
var navbar = document.getElementById('main-navbar');
function toggleResponsiveClass() {
    navbar.classList.toggle('responsive');
}
let menuBtn = document.getElementById('main-menu-btn')
menuBtn.addEventListener('click', toggleResponsiveClass);



function removeResponsiveClass(screenWidth) {
    if (screenWidth.matches) {
        navbar.classList.remove('responsive');
    }
}
var screenWidth = window.matchMedia("(min-width: 1024px)")

removeResponsiveClass(screenWidth);

screenWidth.addEventListener("change", function () {
    removeResponsiveClass(screenWidth);
});


var swiper = new Swiper(".main-slider", {
});

var swiper = new Swiper(".products-slider", {
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 25,
            grid: {
                fill: "row",
                rows: 2,
            },
        },
        1280: {
            grid: {
                fill: "row",
                rows: 2,
            },
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1536: {
            grid: {
                fill: "row",
                rows: 2,
            },
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".comments-slider", {
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".testimonial-stats-slider", {
    slidesPerView: 1.3,
    spaceBetween: 2,
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: false,
        },
    },
});

var swiper = new Swiper(".offer-product-slider", {
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1536: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".gallery-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".news-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});

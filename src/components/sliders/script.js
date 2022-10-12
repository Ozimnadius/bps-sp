window.addEventListener('load', function () {

    const mainProductsSlider = new Swiper(document.querySelector('.main-products__swiper'), {
        spaceBetween: 20,
        allowTouchMove: false
    });

    const mainSlider = new Swiper(document.querySelector('.main-slider__swiper'), {
        pagination: {
            el: '.main-slider__pag',
            clickable: true
        },
        navigation: {
            nextEl: '.main-slider__next',
            prevEl: '.main-slider__prev',
        },
        thumbs: {
            swiper: mainProductsSlider,
        },
    });

    if (!window.matchMedia('(max-width: 767.98px)').matches){
        const platformTasksSlider = new Swiper(document.querySelector('.tasks__swiper'), {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: '.tasks__next',
                prevEl: '.tasks__prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,

                },
                1440: {
                    slidesPerView: 4,
                }
            }
        });
    }


    const morePlatformsSlider = new Swiper(document.querySelector('.more-platforms__swiper'), {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.more-platforms__next',
            prevEl: '.more-platforms__prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
            }
        }
    });

    const moreProductsSlider = new Swiper(document.querySelector('.more-products__swiper'), {
        slidesPerView: 2,
        grid: {
            rows: 3,
        },
        slidesPerGroup: 2,
        spaceBetween: 10,
        navigation: {
            nextEl: '.more-products__next',
            prevEl: '.more-products__prev',
        },
        pagination: {
            el: '.more-products__pag',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 3,
                },
                slidesPerGroup: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 3,
                },
                slidesPerGroup: 3,
                spaceBetween: 20,
            },
        }
    });


});
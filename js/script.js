

window.addEventListener('load', function (){
    new Events();
});

/*Удобный класс сборщик событий*/
class Events {
    constructor() {

        this.elems = document.querySelectorAll('[data-event]');
        this.call = document.querySelector('.call');
        this.menu = document.querySelector('.menu');

        this.init();
    }

    init() {
        this.elems.forEach((i) => {
            let eventName = i.dataset.event;

            switch (eventName) {
                case "openMenu":
                    i.addEventListener('click', this.openMenu.bind(this));
                    break;
                case "closeMenu":
                    i.addEventListener('click', this.closeMenu.bind(this));
                    break;
                case "openCall":
                    i.addEventListener('click', this.openCall.bind(this));
                    break;
                case "closeCall":
                    i.addEventListener('click', this.closeCall.bind(this));
                    break;
                case "sendCall":
                    i.addEventListener('submit', this.sendCall.bind(this));
                    break;
                default:
                    console.log("Не мое событие: " + eventName);
            }
        });

        this.call.addEventListener('click',  (e)=>{
            if (!e.target.closest('.call__form')){
                this.closeCall(e);
            }
        });

        document.querySelector('body').addEventListener('click',  (e)=>{
            if (!e.target.closest('.menu') && !e.target.closest('.header__open-mmenu')){
                this.menu.classList.remove('active');
            }
        });

    }

    openMenu(e) {
        e.preventDefault();
        this.menu.classList.add('active');
        document.querySelector('html').classList.add('ovh');
    }

    closeMenu(e) {
        e.preventDefault();
        this.menu.classList.remove('active');
        document.querySelector('html').classList.remove('ovh');
    }

    openCall(e) {
        e.preventDefault();
        this.call.showModal();
        document.querySelector('html').classList.add('ovh');
    }

    closeCall(e) {
        e.preventDefault();
        this.call.close();
        document.querySelector('html').classList.remove('ovh');
    }

    sendCall(e){
        e.preventDefault();
        let form = e.target,
            data = $(form).serialize(),
            url = form.action;

        $.ajax({
            dataType: "json",
            type: "POST",
            url: url,
            data: data,
            success: function (result) {
                if (result.status) {
                    form.classList.add("ok");
                } else {
                    alert("Что-то пошло не так, попробуйте еще раз!!!");
                }
            },
            error: function (result) {
                alert("Что-то пошло не так, попробуйте еще раз!!!");
            },
        });
    }

}
window.addEventListener('load', function () {
    const mainSlider = new Swiper(document.querySelector('.main-slider__swiper'), {
        pagination: {
            el: '.main-slider__pag',
            clickable: true
        },
        navigation: {
            nextEl: '.main-slider__next',
            prevEl: '.main-slider__prev',
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
window.addEventListener('load', function () {
    // if (window.matchMedia("(max-width: 1439.98px)").matches) {
    //     let flips = document.querySelectorAll('.platform');
    //     flips.forEach(i => {
    //         i.addEventListener('click', function (e) {
    //             e.preventDefault();
    //             this.classList.toggle('flip');
    //         });
    //     });
    // }
});
window.addEventListener('load', function (){
   let searchClear = document.querySelector('.search__clear');

    if (searchClear) {
        searchClear.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('.search__input').value = '';
        })
    }
});
//# sourceMappingURL=script.js.map
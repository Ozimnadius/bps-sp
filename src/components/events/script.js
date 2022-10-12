window.addEventListener('load', function (){
    new Events();
});

/*Удобный класс сборщик событий*/
class Events {
    constructor() {

        this.elems = document.querySelectorAll('[data-event]');
        this.call = document.querySelector('.call');
        this.resume = document.querySelector('.resume');
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
                case "openResume":
                    i.addEventListener('click', this.openResume.bind(this));
                    break;
                case "closeResume":
                    i.addEventListener('click', this.closeResume.bind(this));
                    break;
                case "sendCall":
                    i.addEventListener('submit', this.sendCall.bind(this));
                    break;
                case "sendResume":
                    i.addEventListener('submit', this.sendResume.bind(this));
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

        this.resume.addEventListener('click',  (e)=>{
            if (!e.target.closest('.resume__form')){
                this.closeResume(e);
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

    openResume(e) {
        e.preventDefault();
        this.resume.showModal();
        document.querySelector('html').classList.add('ovh');
    }

    closeResume(e) {
        e.preventDefault();
        this.resume.close();
        document.querySelector('html').classList.remove('ovh');
    }

    sendResume(e) {
        e.preventDefault();
        let form = e.target,
            data = new FormData(form),
            url = form.action;

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            processData: false,
            contentType: false,
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
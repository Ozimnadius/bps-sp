window.addEventListener('load', function (){
    let file = document.querySelector('.file__input');

    if (file){
        file.addEventListener('change', function (e){

            let name = document.querySelector('.file__name'),
                file = this.files[0];
            if(file){
                name.innerHTML = file.name;
                name.classList.add('active');
            } else {
                name.innerHTML = 'Прикрепить резюме(docx/pdf)';
                name.classList.remove('active');
            }

        });
    }
});
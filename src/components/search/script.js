window.addEventListener('load', function (){
   let searchClear = document.querySelector('.search__clear');

    if (searchClear) {
        searchClear.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('.search__input').value = '';
        })
    }
});
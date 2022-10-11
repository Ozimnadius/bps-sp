window.addEventListener('load', function () {
    $('.jobs-item__link').each(function (x,i){
        let $this = $(this),
            $item = $this.closest('.jobs-item'),
            $desc = $item.find('.jobs-item__desc');

        $item.css('--height',`${$desc.height()}px`)
        console.log($desc.height());
    });


    $('.jobs-item__link').on('click', function () {
        let $this = $(this),
            $item = $this.closest('.jobs-item'),
            $more = $item.find('.jobs-item__more');

        $this.toggleClass('open');
        $more.toggleClass('open');

    });
});
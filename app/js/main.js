$(function () {

    $('.menu__btn, .menu__sublink').on('click', function () {
        $('.menu__sublist').toggleClass('show');
    });


    $('.carousel').slick({
        prevArrow: '<button class="slick-arrow--prev" type="button"><span class="sr-only">Предыдущий слайд</span></button>',
        nextArrow: '<button class="slick-arrow--next" type="button"><span class="sr-only">Следующий слайд</span></button>',

        // responsive: [
        //     {
        //         breakpoint: 1280,
        //         settings: {
        //             dots: true,
        //             arrows: false,
        //         }
        //     },
        // ]
    });
});




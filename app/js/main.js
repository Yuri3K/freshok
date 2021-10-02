$(function () {

    $('.menu__btn, .menu__sublink').on('click', function () {
        $('.menu__sublist').toggleClass('show');
    });





    $('.carousel').slick({
        prevArrow: '<button class="slick-arrow--prev" type="button"><span class="sr-only">Предыдущий слайд</span></button>',
        nextArrow: '<button class="slick-arrow--next" type="button"><span class="sr-only">Следующий слайд</span></button>',
    });

    $(".throw").append("<svg><line x1='0' y1='100%' x2='100%' y2='0' stroke-width='2' stroke='rgb(193,193,193)'></line></svg>");

    var mixer = mixitup('.products__favour', {

        animation: {
            effectsIn: 'fade translateY(-100%)',
            duration: 1000,
        }
    });

});




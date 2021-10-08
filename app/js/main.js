$(function () {

    $('.catalog__btn, .catalog__sublink').on('click', function () {
        $('.catalog__sublist').toggleClass('show');
    });

    $('.hotdeal').slick({
        prevArrow: '<button class="slick-arrow--prev" type="button"><span class="sr-only">Предыдущий слайд</span></button>',
        nextArrow: '<button class="slick-arrow--next" type="button"><span class="sr-only">Следующий слайд</span></button>',
    });

    $('.sponsors__list').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        // autoplay: true,
        // autoplaySpeed: 2000,
    });


    $(".star").rateYo({
        rating: 3.6
    });



    $(".price__cost--old").append("<svg><line x1='0' y1='100%' x2='100%' y2='0' stroke-width='2' stroke='rgb(193,193,193)'></line></svg>");

});

var containerEl1 = document.querySelector('[data-ref="mixer-1"]');
var containerEl2 = document.querySelector('[data-ref="mixer-2"]');

var config = {
    controls: {
        scope: 'local'
    },

    animation: {
        effectsIn: 'fade translateY(-100%)',
        duration: 1500,
    }
};

var mixer1 = mixitup(containerEl1, config);
var mixer2 = mixitup(containerEl2, config);




$(function () {

    $('.catalog__btn, .catalog__sublink').on('click', function () {
        $('.catalog__sublist, .catalog__btn, .catalog__picture--arrow').toggleClass('show');
    });


    $('.user--cart, .order__btn--close').on('click', function () {
        $('.order').toggleClass('order--show');
    });

    $('.user--search, .form__button--search').on('click', function () {
        $('.form__search').toggleClass('form--show');
    });

    $('.burger, .mob-menu__vector-btn').on('click', function () {
        $('.mob-menu').toggleClass('mob-menu--active');
    });

    $('.mob-menu__drop-down, .mob-menu__link').on('click', function () {
        $('.mob-menu__list').toggleClass('mob-menu__list--active');
    });





    $('.hotdeal').slick({
        prevArrow: '<button class="slick-arrow--prev" type="button"><span class="sr-only">Предыдущий слайд</span><svg class="slick-arrow__picture" width="20" height="32"><use xlink: href = "images/images.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button class="slick-arrow--next" type="button"><span class="sr-only">Следующий слайд</span><svg class="slick-arrow__picture" width="20" height="32"><use xlink: href = "images/images.svg#arrow-right"></use></svg></button>',

        responsive: [
            {
                breakpoint: 1550,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });



    // (function quantityProducts() {
    //     var $quantityArrowMinus = $(".quantity__minus");
    //     var $quantityArrowPlus = $(".quantity__plus");
    //     // var $quantityNum = $(".quantity__number");

    //     $quantityArrowMinus.click(quantityMinus);
    //     $quantityArrowPlus.click(quantityPlus);

    //     function quantityMinus() {
    //         // var $quantityNum = $(this).siblings(".quantity__numeric").querySelector(".quantity__number");
    //         var $quantityNum = $(this).closest(".quantity").find(".quantity__number");
    //         console.log($quantityNum)
    //         if ($quantityNum.val() > 1) {
    //             $quantityNum.val(+$quantityNum.val() - 1);
    //         }
    //     }

    //     function quantityPlus($quantityNum) {
    //         // var $quantityNum = $(this).siblings(".quantity__numeric").querySelector(".quantity__number");
    //         var $quantityNum = $(this).closest(".quantity").find(".quantity__number");
    //         $quantityNum.val(+$quantityNum.val() + 1);
    //     }
    // })();




    $('.sponsors__list').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
        ]
    });


    $(".unit__star").rateYo({
        rating: 1,
        maxValue: 1,
        numStars: 1,
        fullStar: true,
        starWidth: "16px"
    });



    $('.order__btn--delete').on('click', function () {
        $(this).closest('.order__unit').css({ 'display': 'none' });
    });







    // $(".price__cost--old").append("<svg class=cross><line x1='0' y1='100%' x2='100%' y2='0' stroke-width='2' stroke='rgb(193,193,193)'></line></svg>");

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



const quantity = function () {
    const btns = document.querySelectorAll('.quantity__vector-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', counterState)
    });

    function counterState() {
        const dir = this.dataset.direction;
        const inputEl = this.parentElement.querySelector('.quantity__number');
        let currentValue = inputEl.value;

        dir === 'plus' ? counterPlus(inputEl, currentValue) : counterMinus(inputEl, currentValue);
    };

    const counterPlus = (el, val) => {
        el.value = +val + 1;
    };

    const counterMinus = (el, val) => {
        if (val - 1) el.value = +val - 1;
    };
};

quantity();






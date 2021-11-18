$(function () {


    $('a[href="#"]').click(function () {
        return false;
    });



    $('.catalog__btn, .catalog__sublink').on('click', function () {
        $('.catalog__sublist, .catalog__btn, .catalog__vector--arrow').toggleClass('show');
    });

    $('.user--cart, .order__btn--close').on('click', function () {
        $('.order, body').toggleClass('show');
    });

    $('.user--search, .form__button--search').on('click', function () {
        $('.form__search').toggleClass('form--show');
    });

    $('.burger, .mob-menu__vector-btn').on('click', function () {
        $('.mob-menu, body').toggleClass('show');
    });

    $('.mob-menu__drop-down, .mob-menu__link').on('click', function () {
        $('.mob-menu__list').toggleClass('mob-menu__list--active');
    });

    $('.sort__title').on('click', function () {
        $(this).find('.sort__vector').toggleClass('sort__vector--rotate');
    });

    $('.variety--delete').on('click', function () {
        $(this).closest('.variety').css({ 'display': 'none' });
    });

    $('.top__button--list, .top__button--grid').on('click', function () {
        $('.top__button--list, .top__button--grid').removeClass('active');
        $(this).addClass('active');
    });

    $('.top__button--list').on('click', function () {
        $('.variety, .content__list').addClass('columns');
    });

    $('.top__button--grid').on('click', function () {
        $('.variety, .content__list').removeClass('columns');
    });

    $('.pagination__link--next').on('click', function () {
        $('.pagination').find('.pagination__item--active').next().addClass('pagination__item--active');
        $('.pagination').find('.pagination__item--active').prev().removeClass('pagination__item--active');

    });

    $('.pagination__link--prev').on('click', function () {
        $('.pagination').find('.pagination__item--active').prev().addClass('pagination__item--active');
        $('.pagination').find('.pagination__item--active').next().removeClass('pagination__item--active');
    });


    $('.top__button--filter').on('click', function () {
        $('.sort').addClass('sort--active');
        $('.top__button--filter').addClass('active');
        $('body').css('overflow', 'hidden');
    });

    $('.sort__cross').on('click', function () {
        $('.sort').removeClass('sort--active');
        $('.top__button--filter').removeClass('active');
        $('body').css('overflow', 'auto');
    });

    $('.tabs__title').on('click', function (e) {
        e.preventDefault();
        $('.tabs__title').removeClass('tabs__title--active');
        $(this).addClass('tabs__title--active');

        $('.tabs__box').removeClass('tabs__box--active');
        $($(this).attr('href')).addClass('tabs__box--active')
    });






    $('.hotdeal').slick({
        prevArrow: '<button class="slick-arrow--prev" type="button"><span class="sr-only">Предыдущий слайд</span><svg class="slick-arrow__vector" width="20" height="32"><use xlink: href = "images/images.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button class="slick-arrow--next" type="button"><span class="sr-only">Следующий слайд</span><svg class="slick-arrow__vector" width="20" height="32"><use xlink: href = "images/images.svg#arrow-right"></use></svg></button>',

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

    $('.box__pictures').slick({
        prevArrow: '<button class="slick-arrow--prev" type="button"><span class="sr-only">Предыдущий слайд</span><svg class="slick-arrow__vector" width="20" height="32"><use xlink: href = "images/images.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button class="slick-arrow--next" type="button"><span class="sr-only">Следующий слайд</span><svg class="slick-arrow__vector" width="20" height="32"><use xlink: href = "images/images.svg#arrow-right"></use></svg></button>',

        arrows: true,
        dots: false,
    });

    $('.interest__content').slick({
        prevArrow: '<button class="slick-arrow--prev" type="button"><span class="sr-only">Предыдущий слайд</span><svg class="slick-arrow__vector" width="20" height="32"><use xlink: href = "images/images.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button class="slick-arrow--next" type="button"><span class="sr-only">Следующий слайд</span><svg class="slick-arrow__vector" width="20" height="32"><use xlink: href = "images/images.svg#arrow-right"></use></svg></button>',

        arrows: true,
        // infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
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





    $(document).mouseup(function (e) {
        var block = $(".order");
        if (!block.is(e.target) && block.has(e.target).length === 0) {
            $('.order, body').removeClass('show');
        }
    });

    $(document).mouseup(function (e) {
        var block = $(".mob-menu");
        if (!block.is(e.target) && block.has(e.target).length === 0) {
            $('.mob-menu').removeClass('show');
        }
    });

    $(document).mouseup(function (e) {
        var block = $(".sort");
        if (!block.is(e.target) && block.has(e.target).length === 0) {
            $('.sort').removeClass('sort--active');
            $('.top__button--filter').removeClass('active');
            $('body').css('overflow', 'auto');
        }
    });



    $('.sponsors__list').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
        ]
    });

    $(".variety__star").rateYo({
        rating: 1,
        maxValue: 1,
        numStars: 1,
        fullStar: true,
        readOnly: true,
        ratedFill: "#FFB800"
    });

    if ($(window).width() <= 576) {
        var starWidth = $(".variety__star").rateYo("option", "starWidth");
        $(".variety__star").rateYo("option", "starWidth", "12px");
    } else {
        $(".variety__star").rateYo("option", "starWidth", "16px");
    }

    $(".box__star, .tabs__star").rateYo({
        normalFill: "rgba(193, 193, 193, 0.3)",
        numStars: 5,
        fullStar: true,
        starWidth: "16px",
        spacing: "6px",
        readOnly: true,
        ratedFill: "#FFB800"
    });

    var $range = $(".range__slider");
    var $inputFrom = $(".range__input--from");
    var $inputTo = $(".range__input--to");
    var instance;
    var min = 0;
    var max = 1100;
    var from = 50;
    var to = 1000;

    $(".range__slider").ionRangeSlider({
        type: "double",
        min: min,
        max: max,
        from: 200,
        to: 800,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs,
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }
    $inputFrom.on("change", function () {
        var val = $(this).prop("value");

        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });

        $(this).prop("value", val);

    });

    $inputTo.on("change", function () {
        var val = $(this).prop("value");

        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });

        $(this).prop("value", val);
    });


    $('.top__select').styler();

});



var containerEl1 = document.querySelector('[data-ref="mixer-1"]');
var containerEl2 = document.querySelector('[data-ref="mixer-2"]');

if (containerEl1 || containerEl2) {

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

}

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



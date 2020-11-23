$(function () {
    let sliderIsLive;
    let catalogs = $('[data-slider="slick"]');

    if (window.innerWidth < 1024) {
        $(catalogs).slick({
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            variableWidth: true,

            /*responsive: [{

                breakpoint: 768,
                settings: {
                    infinite: true,
                    speed: 300,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    variableWidth: true,
                }

            }]*/
        });
        sliderIsLive = true;
    }

    window.addEventListener("resize", function () {
        if (window.innerWidth >= 1024) {
            if (!sliderIsLive) return;
            $(catalogs).slick('unslick');
            sliderIsLive = false;

        } else {
            if (!sliderIsLive) {
                $(catalogs).slick({
                    infinite: true,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    variableWidth: true,

                   /* responsive: [{

                        breakpoint: 768,
                        settings: {
                            infinite: true,
                            speed: 300,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: false,
                            arrows: false,
                            variableWidth: true,
                        }

                    }]*/
                });
                sliderIsLive = true;
            }

        }
    });


    $('.slickPrev').on('click', function (event) {
        event.preventDefault();
        let currentSlider = $(this).parents('.catalogs').find('[data-slider="slick"]');
        currentSlider.slick('slickPrev');
    });

    $('.slickNext').on('click', function (event) {
        event.preventDefault();
        let currentSlider = $(this).parents('.catalogs').find('[data-slider="slick"]');
        currentSlider.slick('slickNext');
    })

})
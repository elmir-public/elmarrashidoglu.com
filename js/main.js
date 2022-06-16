$(document).ready(function() {
    if ($('.owl-services').length) {
        var owl = $(".owl-services");
        owl.owlCarousel({
            center: true,
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            // autoplay: true,
            autoplayTimeout: 1000,
            smartSpeed: 1000,
            arrow: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                },
                1024: {
                    items: 4
                },
                1280: {
                    items: 5
                },
                1440: {
                    items: 10
                }

            }
        });
    }
    $(".owl-prev").html('');
    $(".owl-next").html('');
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$(window).scroll(function() {
    if ($(window).scrollTop())
        $('header').addClass('header-fixed');
    else
        $('header').removeClass('header-fixed');
});

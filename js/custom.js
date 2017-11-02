$(function(){
    $('#loader').fadeOut(1000,function () {
        $('.body-content').fadeIn();


        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: ".all",
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.portfolioFilter a').click(function(){
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });


    var $container = $('.portfolioContainer a')[0];
    container.addClass('current');
});



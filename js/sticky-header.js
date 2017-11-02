// This fix the header to the top on scrolling

$(window).scroll(function(){
    if ($(window).scrollTop() >= 1000) {
        $('#navigation-bar').addClass('fixed-top');
    }
    else {
        $('#navigation-bar').removeClass('fixed-top');
    }
});

$('.main_h').addClass('sticky');
$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
    $('.main_h').removeClass('sticky');
        $('.main_h').addClass('sticky-white');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

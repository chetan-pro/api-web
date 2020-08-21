$(document).ready(function () {
    $('.dropdown').click(function () {
        $('.item').toggleClass('drop')

    })
})

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
})

$(document).ready(function () {
    $('#togglebar').click(function () {

        $('#rightnav').toggleClass('slide');
    })
})
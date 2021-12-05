$(function () {

    let nav = $('#nav');
    let logIn = $('#logIn')
    let navToggle = $('#navToggle');

    // fixed header

    let header = $('#header');
    let intro = $('#header__inner')
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    });

    // scroll
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass('show');

        $('html, body').animate({
            scrollTop: elementOffset - 120 //смещение вверх
        }, 700); //время скрола
    });

    // nav toggle


    navToggle.on('click', function (event) {
        event.preventDefault();

        nav.toggleClass('show');
        logIn.toggleClass('show');
        navToggle.toggleClass('active');
    });


});
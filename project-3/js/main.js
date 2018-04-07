// Efekt fadeout po kliknięciu w link zewn

$('a[href*="http"]').click(function (e) {
    e.preventDefault();
    var url = $(this).attr('href');

    $('body').fadeOut(500, function () {
        window.location.href = url;
    });
});


// Zmiana koloru menu przy scrollowaniu & progress bar przescrollowania strony

$(window).scroll(function () {

    // console.log($(this).scrollTop()); // this odnosi się do obiektu, który wywołuje zdarzenie, czyli w tym wypadku do okna

    var currentPos = $(this).scrollTop();

    // Zmiana koloru menu

    if ($(this).scrollTop() > 70) {
        $('.navbar').addClass('scroll');
    } else {
        $('.navbar').removeClass('scroll');
    }

    // Progress bar

    var winHeight = $(this).height();
    var bodyHeight = $('body').height();
    var totalScroll = (currentPos * 100) / (bodyHeight - winHeight);

    $('.progressbar').css('width', totalScroll + '%');

});


// Smooth scroll na menu

$('a[href*="#"]').click(function() {
    var anchor = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(anchor).offset().top - 74
    }, 800);
});
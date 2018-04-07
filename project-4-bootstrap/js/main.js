// Zmiana koloru menu przy scrollowaniu

$(window).scroll(function () {

    // Zmiana koloru menu

    if ($(this).scrollTop() > 70) {
        $('.navbar').addClass('scroll');
    } else {
        $('.navbar').removeClass('scroll');
    }
    
    // Pokazanie popupa po dojechaniu na koniec strony
    
    if ($(document).height() <= ($(this).height() + $(this).scrollTop())) {
        $("#popup").fadeIn(500);
    } else {
        $("#popup").fadeOut(500);
    }
    
    $("#popup-close").click(
        function(e) { 
            e.preventDefault()
            $("#popup").fadeOut(1000);
        }
    );
    
    


});


// Smooth scroll na menu

$('a[href*="#"]').click(function() {
    var anchor = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(anchor).offset().top - 74
    }, 800);
});
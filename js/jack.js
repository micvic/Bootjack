$(document).ready(function () {
    $("nav a").click(function (evn) {
        evn.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });

});
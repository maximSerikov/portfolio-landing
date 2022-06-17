$(document).ready(function() {
    $('.menu-burger__header').click(function(event) {
        $('.menu-burger__header,.header__nav,.selected-language').toggleClass('open-menu');
    });
});
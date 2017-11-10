document.addEventListener('DOMContentLoaded', function () {

    $(document).on('click', '.home-content-item', function (e) {
        e.preventDefault();
        var id = $(this).attr('data-id');
        if ($(this).hasClass('visible-text-about')) {
            $(this).parent().find($('.text-about[data-id='+ id +']')).slideUp();
            $(this).removeClass('visible-text-about');
        } else {
            $('.home-content-item').removeClass('visible-text-about');
            $(this).addClass('visible-text-about');
            $('.text-about').slideUp();
            $(this).parent().find($('.text-about[data-id='+ id +']')).slideDown();
        }
    });

    $(document).on('click', '.mob-append-btn', function () {
        $(this).toggleClass('mob-append-btn-active');
        $('.mob-menu-btn').removeClass('mob-menu-btn-active');
        $('.mob-menu-list').slideUp();
        $('.mob-append-menu').slideToggle()
    });

    $(document).on('click', '.mob-menu-btn', function () {
        $('.mob-menu-btn').toggleClass('mob-menu-btn-active');
        $('.mob-append-btn').removeClass('mob-append-btn-active');
        $('.mob-append-menu').slideUp();
        $('.mob-menu-list').slideToggle()
    });

});
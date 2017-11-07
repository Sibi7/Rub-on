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
    })
    
    $(document).on('click', '.category', function () {
        console.log($(this).find('ul'));
    })
});
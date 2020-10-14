$('.wallet-vendor').on('click', function(event) {

    var cardId = $(this).attr('id');
    //$(this).addClass('face-flipped');
    $(`[data-wallet-face=${cardId}]`).addClass('face-flipped');
    $(`[data-wallet-back=${cardId}]`).addClass('back-flipped');
    $('.close').attr('data-card', cardId)
    $('.wallet-vendor').not($(this)).addClass('slideDown').removeClass('slideUp')
    $('.wallet-info').addClass('slideUp').removeClass('slideDown')
    $('.close').removeClass('slideOutRight').addClass('slideInRight')
    $('.notification').toggleClass('slideInRight slideOutRight')
    $('.search').toggleClass('slideInLeft slideOutLeft')
    $('.title').toggleClass('fadeIn fadeOut')
})
$('.close').click(function() {
        var cardId = $(this).data('card');
        $(`[data-wallet-face=${cardId}]`).removeClass('face-flipped');
        $(`[data-wallet-back=${cardId}]`).removeClass('back-flipped');
        $('.wallet-vendor').not($(`#${cardId}`)).toggleClass('slideDown slideUp')
        $('.wallet-info').toggleClass('slideUp slideDown')
        $('.notification').toggleClass('slideInRight slideOutRight')
        $('.search').toggleClass('slideInLeft slideOutLeft')
        $('.close').removeClass('slideInRight').addClass('slideOutRight')
        $('.title').toggleClass('fadeIn fadeOut')
    })
    // $('.wallet-vendor').on('click', function() {
    //     $('.').addClass('slideDown')
    //     $(this).addClass('face-flipped');
    //     $('.card-back').addClass('back-flipped');
    //     $('.notification').addClass('animate slideOutRight')
    //     $('.search').addClass('animate slideOutLeft')
    //     $('.close').addClass('animate slideInRight')
    //     $('.title').addClass('animate fadeOut')


// })
// $('.card-back').on('click', function() {
//     $(this).removeClass('back-flipped');
//     $('.card-face').removeClass('face-flipped');
// })
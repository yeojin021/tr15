$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/Cn2BHHaYYPQ',
        containment: '#main_visual',
        showControls: false,
    });

    $('.fl>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideToggle(100)
    });

    $(function () {
        $(window).on('scroll', function () {
            let sct = $(window).scrollTop();
            if (sct > 0) {
                $('#header').addClass('on');
            } else {
                $('#header').removeClass('on');
            }
        });
    });

})

$(function () {
    $('#main_content .tab_menu li button').on('click', function () {
        let idx = $(this).parent().index();
        console.log(idx);

        $('#main_content .tab_menu li button').removeClass('on');
        $(this).addClass('on');

        $('#main_content .tab_content .itm').removeClass('on')
        $('#main_content .tab_content .itm').eq(idx).addClass('on')
    });

});



$(function () {
    $('.to_top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        })
    });
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop(); console.log(sct)

        if (sct > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });
});

$(function () {
    $('.to_top2').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        })
    });
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop(); console.log(sct)

        if (sct > 400) {
            $('.to_top2').addClass('on')
        } else {
            $('.to_top2').removeClass('on')
        }
    });
});

$(function () {

    const MMN = new Swiper('.main_menu_slide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '#main_menu .next',
            prevEl: '#main_menu .prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 7,
                spaceBetween: 30,
            }
        },

    });

    const MME = new Swiper('.main_event_slide', {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

});


$(function () {
    $('.mbtn').on('click', function () {
        $(this).toggleClass('is-active')
        $('.gnb').toggleClass('on');
        $('#header h1').toggleClass('on')
    })
});


$(function () {

    $('.gnb>ul>li>a ').on('click', function (e) {
        if ($('.gnb').hasClass('on') && $(this).next().is('.gnb_wrap')) {
            e.preventDefault();
            $('.hd_wrap .gnb_wrap').stop().slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function () {
        let ww = $(window).width();
        if (ww > 768) {
            $('.gnb').removeClass('on');
            $('.hd_wrap .gnb_wrap').removeAttr('style');
        }
    })
})
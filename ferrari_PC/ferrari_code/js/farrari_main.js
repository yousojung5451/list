$(function () {
    const $langBtn = $('.lang_btn');
    const $topBtn = $('.top_btn');

    function changeLanguage(lang) {
        $('[data-ko][data-en]').each(function () {
            const text = $(this).attr('data-' + lang);
            $(this).text(text);
        });

        $langBtn.removeClass('active');
        $('.lang_btn[data-lang="' + lang + '"]').addClass('active');

        $('html').attr('lang', lang);

        if (lang === 'ko') {
            $('.skip_nav').text('본문 바로가기');
            $('.login').text('로그인');
            $('.top_btn').attr('aria-label', '맨 위로 이동');
            $('.menu_btn').attr('aria-label', '메뉴 열기');
        } else {
            $('.skip_nav').text('Skip to main content');
            $('.login').text('Login');
            $('.top_btn').attr('aria-label', 'Back to top');
            $('.menu_btn').attr('aria-label', 'Open menu');
        }
    }

    $langBtn.on('click', function () {
        const lang = $(this).data('lang');
        changeLanguage(lang);
    });

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $topBtn.fadeIn();
        } else {
            $topBtn.fadeOut();
        }
    });

    $topBtn.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    changeLanguage('en');
});


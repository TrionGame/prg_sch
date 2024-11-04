console.log("reading...");
init();

//初期処理
function init(){
    $(function () {
        makeMenuList();
        $(document).ready(function () {
            $(".fadein_mv_item").addClass("fadein");
        });
        changeTab();
        scrollEvent();
        dispApplyBtn();
        toggleQA();
        var scrTop_btn = $(".scrTop_btn").offset().top;
        $(window).on("scroll", function () {
            var scroll = $(window).scrollTop() + $(window).height();
            if (scroll >= scrTop_btn + 1000) {
                $(".scrTop_btn").addClass("display");
            } else {
                $(".scrTop_btn").removeClass("display");
            }
        });
        $('.scrTop_btn').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
}

/**
 * ハンバーガーメニューの作成
 */
function makeMenuList(){
    const ham = $('#js-hamburger');
    const nav = $('#js-nav');
    ham.on('click', function () {
        ham.toggleClass('active');
        nav.toggleClass('active');

    });
    $('.nav-items__item a[href^="#"]').click(function () {
        var adjust = 60;
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - adjust;
        ham.removeClass('active');
        nav.removeClass('active');
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
}
/**
 * hrefを取得。タブの切替
 * @param {*} hashIDName 
 */
function GethashID(hashIDName) {
    if (hashIDName) {
        $('.tab_each_fee li').find('a').each(function () {
            var idName = $(this).attr('href');
            if (idName == hashIDName) {
                var parentElm = $(this).parent();
                $('.tab_each_fee li').removeClass("active");
                $(parentElm).addClass("active");
                $(".area").removeClass("is-active");
                $(hashIDName).addClass("is-active");
            }
        });
    }
}
/**
 * タブの切替
 */
function changeTab(){
    //タブ切替時
    $('.tab_each_fee a').on('click', function () {
        var idName = $(this).attr('href');
        GethashID(idName);
        return false;
    });
    //初期状態
    $(window).on('load', function () {
        $('.tab_each_fee li:first-of-type').addClass("active");
        $('#webApp').addClass("is-active");
        var hashName = location.hash;
        GethashID(hashName);
    });
}
/**
 * スクロール時に表示
 */
function scrollEvent(){
    jQuery(window).scroll(function () {
        jQuery('.scale-up').each(function () {
            var pos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > pos - windowHeight + 300) {
                jQuery(this).addClass('active');
            }
        });
    });
}
/**
 * 「申し込み」ボタンの表示切替
 */
function dispApplyBtn() {
    var fixed = $(".apply_btn").offset().top;
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop() + $(window).height();
        if (scroll >= fixed + 1000) {
            $("#fixed_bottom_block").addClass("display");
        } else {
            $("#fixed_bottom_block").removeClass("display");
        }
    });
}
/**
 * Q&Aの開閉処理
 */
function toggleQA(){
    $(".q").click(function () {
        $(this).next().slideToggle(200)
        $(this).next().toggleClass("active", 200);
        $(this).toggleClass("active", 200);
    });
}
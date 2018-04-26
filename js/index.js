//头部滚动 开始
(function () {
    var $oHeader = $("#header");
    $(window).on("scroll" , function () {
        //窗口高度-100
        var windowHeight = $(window).height()-100;
        //滚动距离
        var scrollTop = $(window).scrollTop();
        if (scrollTop > windowHeight) {
            $oHeader.addClass("on");
        } else {
            $oHeader.removeClass("on");
        }
    });
})();
//头部滚动 结束
//滚动监听 开始
(function () {
    $('body').scrollspy({
        target: ".navbar-default",
        offset: 80
    });
})();
//滚动监听 结束
//轮播部分 开始
(function () {
    $("#our-team").owlCarousel({
        slideSpeed:200,
        paginationSpeed:400
    });
})();
//轮播 结束
//合作方轮播 开始
(function () {
    $("#our-partner").owlCarousel({
        slideSpeed:200,
        paginationSpeed:400
    });
})();
//合作方轮播 结束
//档案轮播 开始
(function () {
    $("#portfolio .por-text").owlCarousel({
        items : 1,
        slideSpeed:200,
        paginationSpeed:400
    });
})();
//档案轮播 结束
//分类、过滤 开始
(function () {
    var $olightBox = $("#lightBox");
    var $aA = $("#cat li a");
    $olightBox.isotope({
        filter:"*",
        animationOptions:{
            duration:750,
            easing:"linear"
        }
    });
    $aA.click(function (ev) {
        ev.preventDefault();
        $(this).addClass("active").parent().siblings().children().removeClass("active");
        var selector = $(this).attr("data-filter");
        $olightBox.isotope({
            filter:selector,
            animationOptions:{
                duration:750,
                easing:"linear"
            }
        });
        return false;
    });
})();
//分类、过滤 结束
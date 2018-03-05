function main() {

    (function() {
        //滚动监听插件
        $("#evaluate").waypoint(function() {
            $(".bio-text:eq(0)").addClass("bio-text-1");
            $(".bio-text:eq(1)").addClass("bio-text-2");
            $(".bio-text:eq(2)").addClass("bio-text-3");
        }, { offset: '120%' });
        // 锚点平滑过渡插件
        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 900);
                    return false;
                }
            }
        });
        // 图片过滤插件
        $(window).load(function() {
            var $container = $('.portfolio-items');
            $container.isotope({
                filter: '.position',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.cat a').click(function() {
                $('.cat .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

        });
        // 图片全屏插件
        $("a[rel^='prettyPhoto']").prettyPhoto({
            social_tools: false
        });

    }());


}
main();

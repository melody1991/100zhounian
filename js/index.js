 //第3屏感谢信
 $(".example").hover(function() {
        $(this).stop().animate({
            opacity: '1'
        }, 600);
    }, function() {
        $(this).stop().animate({
            opacity: '1'
        }, 1000);
    }).on('click', function() {
        $("#mask").remove();
        $("body").append("<div id='mask'></div>");
        $("body").append($("#LoginBox"));
        $("#mask").addClass("mask").fadeIn("slow");
        $("#LoginBox").fadeIn("slow");
    });
    //
    //发送按钮
    $("#loginbtn").hover(function() {
        $(this).stop().animate({
            opacity: '1'
        }, 600);
    }, function() {
        $(this).stop().animate({
            opacity: '0.8'
        }, 1000);
    });
    // 关闭按钮
    $(".close_btn").hover(function() {
        $(this).css({
            color: 'black'
        })
    }, function() {
        $(this).css({
            color: '#999'
        })
    }).on('click', function() {
        $("#LoginBox").fadeOut("fast");
        $("#mask").css({
            display: 'none'
        });
    });
    //下一页
    $('a[href*=#],area[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    1000);
                return false;
            }
        }
    });
    window.onload = function() {
        $('.main1').addClass('current');
        //页面一加载进来就给顶部导航条字体加粗显示
        $('.one').addClass('nows');
    }
    // 滚屏插件的配置
    $('#dowebok').fullpage({
        sectionsColor: ['#fff', '#fff', '#7BAABE', '#f90'],
        anchors: ['page1', 'page2', 'page3', 'page4'],
        afterLoad: function(anchorLink, index) {
            $('.section').removeClass('current');
            // 当前屏添加一个current属性
            setTimeout(function() {
                    $('.section').eq(index - 1).addClass('current');
                }, 100)
            // 判断当前是哪一个页面，让下面对应的字体加粗
            if (index === 1) {
                $('.one').addClass('nows');
                $('.two').removeClass('nows');
                $('.three').removeClass('nows');
                $('.four').removeClass('nows');
            } else if (index === 2) {
                $('.two').addClass('nows');
                $('.one').removeClass('nows');
                $('.three').removeClass('nows');
                $('.four').removeClass('nows');
            } else if (index === 3) {
                $('.one').removeClass('nows');
                $('.two').removeClass('nows');
                $('.three').addClass('nows');
                $('.four').removeClass('nows');
            } else if (index === 4) {
                $('.one').removeClass('nows');
                $('.two').removeClass('nows');
                $('.three').removeClass('nows');
                $('.four').addClass('nows');
            }
        }

    });

    $(window).resize(function() {
        autoScrolling();
    });

    function autoScrolling() {
        var $ww = $(window).width();
        if ($ww < 1024) {
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }

    autoScrolling();
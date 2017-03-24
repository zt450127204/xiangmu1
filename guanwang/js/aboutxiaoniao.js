var GLOBAL=GLOBAL||{};
$(function() {
    complateSize();
    function  complateSize() {
        $(".main_wrap,.main_slide,.wrap_block").width($(window).width());
         GLOBAL.height = $(window).height()-50;
        $(".main_wrap,.wrap_block").height($(window).height()-50);
    }
     $(window).resize(function(){
         complateSize();
         mouseScrollMove();
     });

    $(".xn li").click(function(){
        var index=$(this).index();
        if(index==4){
            GLOBAL.mouseScrollIndex=4;
        }
        else if(index==5){
            return;
        }
        else {
            GLOBAL.mouseScrollIndex=index+1;
        }
        mouseScrollMove();
        $(".xn li").removeClass("now");
        if(index==3||index==4){
            $(".xn li").eq(3).addClass("now");
            $(".xn li").eq(4).addClass("now");
        }else {
            $(this).addClass("now");
        }
    });
     //鼠标滚轴事件
    //ie chorme
    window.onmousewheel=mouseScroll;
    window.addEventListener("DOMMouseScroll",mouseScroll);

    function  mouseScroll(ev){
        //判断方向
        var oEvent=ev||window.event;
        if(oEvent.wheelDelta){
            if(oEvent.wheelDelta<0){
             mouseScrollDown();
            }
            else {
                mouseScrollUp();
            }
        }
        else {
            if(oEvent.detail>0){
                mouseScrollDown();
            }
            else {
                mouseScrollUp();
            }
        }
    }
    GLOBAL.mouseScrollIndex=0;
    var aWrap_block=$(".wrap_block");
    var oMainslide=$(".main_slide");
    //控制每两秒钟切换一个
    GLOBAL.slideingTimer=null;
    GLOBAL.slideingDelay=2000;
    GLOBAL.slideingGoing=false;
  //第一次 不允许翻页 false不是第一次允许翻页
    GLOBAL.isFirstSlide=true;




    function mouseScrollUp(){
        if(! GLOBAL.slideingGoing){
            GLOBAL.slideingGoing=true;
            GLOBAL.slideingTimer=setTimeout(function(){
                GLOBAL.slideingGoing=false;
            },GLOBAL.slideingDelay)
        }else {
            return
        }
        if(GLOBAL.isFirstSlide){
            if (!GLOBAL.firstSlideTimer) {
                GLOBAL.firstSlideTimer = setTimeout(function () {
                    GLOBAL.isFirstSlide = false;
                    GLOBAL.firstSlideTimer = null;
                }, 50);
            }
            return
        }
        GLOBAL.isFirstSlide=true;
        //alert("上")
        GLOBAL.mouseScrollIndex--;
        if(GLOBAL.mouseScrollIndex<0){
            GLOBAL.mouseScrollIndex=0;
         }
        mouseScrollMove();
    }
    function mouseScrollDown(){
         if(!GLOBAL.doWelcomeAnimateOver){
             return;
         }
        if(! GLOBAL.slideingGoing){
            GLOBAL.slideingGoing=true;
            GLOBAL.slideingTimer=setTimeout(function(){
                GLOBAL.slideingGoing=false;
            },GLOBAL.slideingDelay)
        }else {
            return;
        }
        if(GLOBAL.isFirstSlide) {
            if (!GLOBAL.firstSlideTimer) {
                GLOBAL.firstSlideTimer = setTimeout(function () {
                    GLOBAL.isFirstSlide = false;
                    GLOBAL.firstSlideTimer = null;
                }, 50);
            }
            return
        }
        GLOBAL.isFirstSlide=true;
        //alert("下")
        GLOBAL.mouseScrollIndex++;
        if(GLOBAL.mouseScrollIndex>=aWrap_block.length){
            GLOBAL.mouseScrollIndex=aWrap_block.length-1;
        }
        mouseScrollMove();
    }
  function  mouseScrollMove(){

      oMainslide.animate({top:GLOBAL.mouseScrollIndex*-GLOBAL.height});
     if(GLOBAL.mouseScrollIndex!=0) {
         $(".xn li").removeClass("now");
     }
     if(GLOBAL.mouseScrollIndex==4||GLOBAL.mouseScrollIndex==5){
         $(".xn li").eq(3).addClass("now");
         $(".xn li").eq(4).addClass("now");
     }else {
         $(".xn li").eq(GLOBAL.mouseScrollIndex - 1).addClass("now");
     }
  }

    $("#ls").height(GLOBAL.height+50);
    $("#ls").width($(window).width());
//  1  4秒钟  图片向上移动  50%  40%
//   2   将文字按照顺序出现
    // 3 将蓝色界面收起
    GLOBAL.doWelcomeAnimateOver=false;
    doWelcomeAnimate();
    function doWelcomeAnimate(){
        setTimeout(function(){
            $(".gf").animate({top:0},600,function(){
                $(".n").each(function(index){
                    var $this=$(this);
                    setTimeout(function(){
                        $this.show().addClass("animated fadeInUp")
                    },200*index)
                })
            })
        },4000);
        setTimeout(function(){
            $("#ls").slideUp();
            GLOBAL.doWelcomeAnimateOver=true;
        },6000)
    }
    $("#ls").dblclick(function(){
        $("#ls").slideUp();
        GLOBAL.doWelcomeAnimateOver=true;
    });

  //1  当动画结束之前  滚轴能够操纵轮播图
  //2  当屏幕放大或缩小时  能够修正到正确位置
  //3  导航
  //4  双击

        $("#box").height(GLOBAL.height);
    $(".right").click(function(){
        $(".lb-box").animate({left:-$(window).width()},function(){
            $(".lb-box").css("left",0);
            $(".lb-box").append($(".lb-box>div").first())
        })
    });
    $(".left").click(function(){
        $(".lb-box").prepend($(".lb-box>div").last());
        $(".lb-box").css("left",-$(window).width());
        $(".lb-box").animate({left:"0"});
    });
//  1确定到底点击了哪一个
     var index= location.hash.substr(1);
    location.hash="";
    //2 如果存在页码  则跳过欢迎页
     if(index){
         //取消蓝色欢迎
         $("#ls").hide();
         GLOBAL.doWelcomeAnimateOver=true;
         GLOBAL.mouseScrollIndex=index;
         mouseScrollMove();
     }
    $(".btn-left").click(function(){
        $(".zx-box").animate({"left":"0"});
        $(this).css("backgroundPositionX",-78)
            .animate({"backgroundPositionY":0},300)
            .animate({"backgroundPositionX":0});
        $(".btn-right").animate({"backgroundPositionY":-8},300)

    });
    $(".btn-right").click(function(){
        $(".zx-box").animate({"left":-910},300);
        $(this).css("backgroundPositionX",-78)
            .animate({"backgroundPositionY":0},300)
            .animate({"backgroundPositionX":0});
                $(".btn-left").animate({"backgroundPositionY":-8},300)

    });





});
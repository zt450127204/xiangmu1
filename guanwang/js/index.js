/**
 * Created by dellpc on 2017/3/9.
 */
$(function(){

    $("#header").load("header.html");
   //主banner开始
    (function(){
        var oBanner=$(".banner");
        var arrBannerOne=oBanner.find(".banner-a");
        var aBannerOne=oBanner.find(".bannerOne");
        var arrNav=oBanner.find(".xd li");
        var oNext=oBanner.find(".next");
        var oPre=oBanner.find(".pre");
        var index=0;
        arrNav.click(function(){
            index=$(this).index();
            aBannerOne.stop().fadeOut().eq(index).fadeIn();
            arrNav.removeClass("active");
            $(this).addClass("active");
            animate()
        });
        animate();
        function animate(){
            arrBannerOne.show();
            arrBannerOne.find("img").hide();
            arrBannerOne.eq(index).find(".image1").show().addClass("animated fadeInLeft");
            setTimeout(function(){
                arrBannerOne.eq(index).find(".image2").show().addClass("animated fadeInRight");
                arrBannerOne.eq(index).find(".image3").show().addClass("animated fadeIn");
            },300);
        }
        oNext.click(function(){
            index++;
               if(index>arrNav.length-1){
                index=0;
            }
            aBannerOne.stop().fadeOut().eq(index).fadeIn();
            arrNav.removeClass("active");
            arrNav.eq(index).addClass("active");
            animate();
        });
       oPre.click(function(){
            index--;
            if(index<0){
                index=arrNav.length-1;
            }
            aBannerOne.stop().fadeOut().eq(index).fadeIn();
            arrNav.removeClass("active");
            arrNav.eq(index).addClass("active");
            animate();
        });

        $(".pre").hover(
            function(){
                $(".pre img").attr("src","image/prev_jiantou_hover.png" );
            },
            function(){
                $(".pre img").attr("src","image/prev_jiantou.png" );
            }
        );
        $(".next").hover(
            function(){
                $(".next img").attr("src","image/next_jiantou_hover.png" );
            },
            function(){
                $(".next img").attr("src","image/next_jiantou.png" );
            }
        );
    })();
    //主banner 结束
//  产品开始
    (function(){
        var oBox=$(".zy");
        var oLb=oBox.find(".content");
        var oNext=oBox.find(".next");
        var oPre=oBox.find(".pre");
        var arrNav=oBox.find(".ul li");
        var index=0;
        arrNav.click(function(){
            index=$(this).index();
            oLb.stop().fadeOut().eq(index).fadeIn();
            arrNav.children().removeClass("dq");
            $(this).children().eq(0).addClass("dq");
            var action="";
            if($(this).index()>index){
                alert($(this).index());
                action ="fadeInRight";
            }
            else{
                action ="fadeInLeft";
            }
            move(action);
        });
        oNext.click(function(){
           index++;
            if(index>arrNav.length-1){
                index=0;
            }
            move("fadeInRight");
        });
        oPre.click(function(){
            index--;
            if(index<0){
                index=arrNav.length-1;
            }
            move("fadeInLeft");
        });
        move('fadeInLeft');
        function move(action){
            oLb.hide().eq(index).show();
            arrNav.children().removeClass("dq");
            arrNav.eq(index).children().eq(0).addClass("dq");
            oLb.eq(index).find("img,h1,p").removeClass("fadeInRight fadeInLeft")
                .addClass("animated "+action)
        }

         var oGd=$(".a").find("a");
         oGd.hover(
             function(){
            oGd.removeClass("r-dw")
                .addClass("r-dw1");
         },
        function(){
            oGd.removeClass("r-dw1")
                .addClass("r-dw");
        }
         )











    })();
// 产品结束
//业务范围开始
    (function(){
        $(".y1-1-2, .y-an, .y-an1 ").hover(

            function(){
            $(this).addClass("tada animated");

        },
            function(){
                $(this).removeClass("tada animated");
            }
        );
        $(".y1-1-2").click(function(){
              var index=$(this).index(".y1-1-2");
                   if($(".y1-1").eq(index).hasClass("show")){
                       $(".y-content").slideUp(300);
                       $(".y1-1").removeClass("show");
                       $(".ss").removeClass("y-an")
                           .eq(index).addClass("y-an1");
                   }
                   else{
                       $(".y1-1").removeClass("show").eq(index).addClass("show");
                       $(".ss").removeClass("y-an1,y-an").addClass("y-an1")
                               .eq(index).removeClass("y-an1")
                               .addClass("y-an");
                       $(".y-content").slideUp(300).eq(index).delay(300).slideDown(300);
                   }
        });
        $(".ss").click(function(){
            var index=$(this).index(".ss");
            if($(".y1-1").eq(index).hasClass("show")){
                $(".y-content").slideUp(300);
                $(".y1-1").removeClass("show");
                $(".ss").removeClass("y-an")
                    .eq(index).addClass("y-an1");
            }
            else{
                $(".y1-1").removeClass("show").eq(index).addClass("show");
                $(".ss").removeClass("y-an1,y-an").addClass("y-an1")
                    .eq(index).removeClass("y-an1")
                    .addClass("y-an");
                $(".y-content").slideUp(300).eq(index).delay(300).slideDown(300);
            }
        })
    })();
//业务范围结束
//团队介绍开始
    (function(){
        var index=0;
        $(".next").click(function(){
            $(".lb-b").animate({left:"-1400px"}).delay(10).animate({left:"-1100px"},function(){
                $(".lb-b").css("left","0");
                $(".lb-b").append($(".lb-b b").first())
            });
            index++;
            if(index>$("#u1 li").length-1){
                index=0
            }
            $("#u1 li").removeClass("active").eq(index).addClass("active");
        });
        $(".pre").click(function(){
            $(".lb-b").prepend($(".lb-b b").last());
            $(".lb-b").css("left","-1100px");
            $(".lb-b").animate({left:"500px"}).delay(50).animate({left:"0"});
            index--;
            if(index<0){
                index=$("#u1 li").length-1;
            }
            $("#u1 li").removeClass("active").eq(index).addClass("active");

        })

        function auto(){
            $(".lb-b").animate({left:"-1400px"}).delay(10).animate({left:"-1100px"},function(){
                $(".lb-b").css("left","0");
                $(".lb-b").append($(".lb-b b").first())
            });
            index++;
            if(index>$("#u1 li").length-1){
                index=0
            }
            $("#u1 li").removeClass("active").eq(index).addClass("active");
        }
         timer=setInterval(auto,2000);
        $(".t-lb").hover(
            function(){
                clearInterval(timer);
            },
            function(){
                timer=setInterval(auto,2000);
            }


        )





    })();
//团队介绍结束
    $("#footer").load("footer.html");












});

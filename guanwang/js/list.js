/**
 * Created by dellpc on 2017/3/9.
 */
    //存储全局变量
var GLOBAL=GLOBAL||{};
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $(".xn li:odd").css("margin-right","0");
    $("#pen").hover(
        function(){
            $("#pen").removeClass("pen")
                .addClass("pen1");
        },
        function(){
            $("#pen").removeClass("pen1")
                .addClass("pen");
        }
    );
    $("#pen").click(function(){
        $(this).hide(20,function(){
            $(".x-x").css("width","61px");
            $(".x-x").css("backgroundPositionX","-1049px");
            $(this).show();
            $(".x-x").animate({"width":"1100px","backgroundPositionX":"0"},1000)
        })
    });
    LoadArticleList();
    $(".xn li").hover(
        function(){
            var index=$(this).index();
            $(".sj").eq(index).stop().animate({"left":"50px"},1000)
        },
        function(){
            var index=$(this).index();
            $(".sj").eq(index).stop().animate({"left":"0"},0)
        }
    );
    //$("#list-more").hover(
    //    function(){
    //        $(this).stop().animate({"backgroundPositionY":0},200)
    //    },
    //    function(){
    //        $(this).stop().animate({"backgroundPositionY":-58},200)
    //    }
    //);

    $("#list-more").bind("mouseenter",function(){
        $(this).stop().animate({"backgroundPositionY":0},200)
    });

    $("#list-more").bind("mouseleave",function(){
        $(this).stop().animate({"backgroundPositionY":-58},200)
    });
    $("#list-more").click(function(){
        if(GLOBAL.pageStart<GLOBAL.pageCount){
            LoadArticleList();
            $(".xn li").hover(
                function(){
                    var index=$(this).index();
                    $(".sj").eq(index).stop().animate({"left":"50px"},1000)
                },
                function(){
                    var index=$(this).index();
                    $(".sj").eq(index).stop().animate({"left":"0"},0)
                }
            );
        }

    })
});
   function LoadArticleList(){
   //    第一次加载数据 将列表清空
   //    pageStart 数据开始位置
       if(!GLOBAL.pageStart){
           GLOBAL.pageStart=0;
           $("#xn").html("");
       }
   //    请求到的数据
       var result=listData["listData0"+ GLOBAL.pageStart];
       var list=result.data.list;
   //    模版
       if(!list||!list.length){
           $("#xn").html("没有数据了")
       }
       else {
       for(var i=0;i<list.length;i++){
           var model=$("#itemHTML").html();
           var updateTime=list[i].creatAt||updateTime;
           model=model.replace("$articleCover$",list[i].coverImg)
               .replace("$articleTitle$",list[i].title)
               .replace("$updateTime$",list[i].creatAt)
               .replace("$describe$",list[i].describe)
               .replace("$articleId$",list[i].sysID);
           $("#xn").append(model);$(".xn li:odd").css("margin-right","0");
       }
     GLOBAL.pageStart++;
   //    判断是否有数据可以继续加载
        var count=result.data.count;
         GLOBAL.pageCount=Math.ceil(count/result.data.pageSize);
       if(GLOBAL.pageStart>=GLOBAL.pageCount){
               $("#list-more").css("opacity",0.3).unbind("mouseenter").unbind("mouseleave");
               $("#xk").removeClass("xk").addClass("xk1");

       }
       }
   }

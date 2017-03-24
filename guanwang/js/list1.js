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
    $("#list-more").bind("mouseenter",function(){
        $(this).stop().animate({"backgroundPositionY":0},200)
    });
    $("#list-more").bind("mouseleave",function(){
        $(this).stop().animate({"backgroundPositionY":-58},200)
    });
    $("#list-more").click(function(){
        if(GLOBAL.pageStart<GLOBAL.pageCount){
            LoadArticleList();
        }
    });
    $("#xn").delegate(".li","click",function(){
        var articleId=$(this).attr("articleid");
        window.open("article.html?articleId="+articleId+"&type=xiaoniaoNews");
    });
});

function LoadArticleList(){
    if(!GLOBAL.pageStart){
        GLOBAL.pageStart=0;
        $("#xn").html("");
    }
    $.ajax({
        type:"GET",
        url:"http://localhost/listData.php",
        data:{
            page:GLOBAL.pageStart
        },
        success:function(data){
            //alert(typeof data);
            //    string->json
            showData(JSON.parse(data))
        }
    });
}
function showData(data){
    var list=data.data.list;
    for(var i=0;i<list.length;i++){
        var model=$("#itemHTML").html();
        var updateTime=list[i].creatAt||updateTime;
        model=model.replace("$articleCover$",list[i].coverImg)
            .replace("$articleTitle$",list[i].title)
            .replace("$updateTime$",list[i].creatAt)
            .replace("$describe$",list[i].describe)
            .replace("$articleId$",list[i].sysId);
        $("#xn").append(model);$(".xn li:odd").css("margin-right","0");
    }

    GLOBAL.pageStart++;
    //    判断是否有数据可以继续加载
    var count=data.data.count;
    GLOBAL.pageCount=Math.ceil(count/data.data.pageSize);
    if(GLOBAL.pageStart>=GLOBAL.pageCount){
        $("#list-more").css("opacity",0.3).unbind("mouseenter").unbind("mouseleave");
        $("#xk").removeClass("xk").addClass("xk1");
    }
    $("#xn li").hover(
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

/**
 * Created by dellpc on 2017/3/9.
 */
var GLOBAL=GLOBAL||{};
//避免变量的污染 全局和系统本身的变量冲突
$(function() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    //var name="articleId";
    //alert(getUrlParams(name));
    //alert(getUrlParams("type"));
    GLOBAL.articleid=getUrlParams("articleId");
    GLOBAL.type=getUrlParams("type");
    loadArticleData();

    var arrayRanSkip=["娘娘威武","皇上万岁，万万岁","爱死你啦、MUA~","再点一下试试"];
    GLOBAL.firstClick=true; //表示第一次点击
    $(".tu").click(function(){
       //判断是否第一次点击
        if(GLOBAL.firstClick){
            GLOBAL.firstClick=false;
            var index=Math.floor(Math.random()*arrayRanSkip.length);
            var content=arrayRanSkip[index];
            $(".like_tips").html(content);
             doMove();
        }
        else if($(".like_tips").html()=="再点一下试试"){
            $(".like_tips").html("让你点，你就点，乖宝宝");
            doMove();
        }
    });

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
            $(".x-x").css("backgroundPositionX","-719px");
            $(this).show();
            $(".x-x").animate({"width":"719px","backgroundPositionX":"0"},1000)
        })
    });
    $(".tu").hover(
        function(){
            $(this).stop().animate({"backgroundPositionY":"73px"},500);
             $(".tu1").stop().animate({"width":135},300).css("display","block");

        },
        function(){

            $(".tu1").stop().animate({"width":0},100).css("display","none");
        }
    );
});
function doMove(){
    $(".like_tips").animate({top:80,opacity:1},"elasticOut")
        .delay(800)
        .animate({left:-800,opacity:0},"backIn",function(){
            $(".like_tips").css("top",100,"left",-60)
        })
}


function getUrlParams(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return  r[2];
    else
        return "";
}
function loadArticleData(){
    if(GLOBAL.type){
        //可以把json文件转换成php 然后通过ajax请求
        var articleData1=articleData[GLOBAL.type+GLOBAL.articleid];

        $(".title").html(articleData1.data.typeTitle);
        $(".o").html(articleData1.data.typeEntitle);
        $(".xn").html(articleData1.data.title);
        $(".author").html(articleData1.data.creatByFullName);
        $(".img1").attr("src",articleData1.data.coverImg);
        $(".zi").html(articleData1.data.content);
    }
}
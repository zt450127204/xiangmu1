
$(function(){
$(".d-t2").hover(
    function(){
        $(".d-t2").stop().animate({"backgroundPositionY":"0px"},1000)
    },
    function(){
        $(".d-t2").stop().animate({"backgroundPositionY":"-50px"},0)
    });
$(window).scroll(function(){
    if($(window).scrollTop()>500){
        $(".fixed").fadeIn(200);
    }
    else {
        $(".fixed").fadeOut(200);
    }
});
$(".d-t2").click(function(){
    window.scrollTo(0,0);
});/**
 * Created by dellpc on 2017/3/9.
 */
});
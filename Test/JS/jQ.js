/**
 * Created by ASUS-PC on 2015/9/22.
 */

$(document).ready(function() {
        //把id="mark"的<li>赋值给常量
        var line_reset = $("#mark");

        //将滑块的初始位置定在id="mark"的上方
        $(".line").css("left",line_reset.position().left);

        //当鼠标放在<li>上时
        $("li").mouseenter(function () {
            //鼠标样式变为pointer
            $(this).css("cursor", "pointer");
            //滑块 正在做的所有事情停止（这个是为了保证滑块移动的连贯效果，删去后试下就知道为什么要加了）
            $(".line").stop();
            //滑块 正在做的所有事情停止之后，向鼠标所指的<li>上方移动
            $(".line").animate({left:  $(this).position().left +'px'},350);
        });

        //当鼠标离开<li>时
        $("li").mouseleave(function(){

            $(".line").stop();
            //滑块 回到id="mark"的标签上
            $(".line").animate({left: line_reset.position().left + 'px' },250);
        });
    }
);
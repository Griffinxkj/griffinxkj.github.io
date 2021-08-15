function changeImgToZju(){
    var source = document.getElementById("school-picture");

    var img = "img/学校/浙大.jpg";
    source.src = img;

    var fadeIn = null;
    clearInterval(fadeIn);
    var iFadeIn = 0;
    var step = 2;

    fadeIn = setInterval(function(){
        iFadeIn += step;
        if( iFadeIn >= 100) {
            iFadeIn = 100;
            clearInterval(fadeIn);
        }
        source.style.opacity = iFadeIn / 100;
    },10);
}


function changeImgToZucc(){
    var source = document.getElementById("school-picture");

    var img = "img/学校/城院.jpg";
    source.src = img;

    var fadeIn = null;
    clearInterval(fadeIn);
    var iFadeIn = 0;
    var step = 1;

    fadeIn = setInterval(function () {
        iFadeIn += step;
        if (iFadeIn >= 100) {
            iFadeIn = 100;
            clearInterval(fadeIn);
        }
        source.style.opacity = iFadeIn / 100;
    }, 10);
}

function changeImgToAct1(){
    var source = document.getElementById("activity-picture");

    var img = "img/实践/浙江大学互联网金融研究院.jpg";
    source.src = img;

    var fadeIn = null;
    clearInterval(fadeIn);
    var iFadeIn = 0;
    var step = 1;

    fadeIn = setInterval(function () {
        iFadeIn += step;
        if (iFadeIn >= 100) {
            iFadeIn = 100;
            clearInterval(fadeIn);
        }
        source.style.opacity = iFadeIn / 100;
    }, 10);
}

function changeImgToAct2(){
    var source = document.getElementById("activity-picture");

    var img = "img/实践/互联网.jpg";
    source.src = img;

    var fadeIn = null;
    clearInterval(fadeIn);
    var iFadeIn = 0;
    var step = 1;

    fadeIn = setInterval(function () {
        iFadeIn += step;
        if (iFadeIn >= 100) {
            iFadeIn = 100;
            clearInterval(fadeIn);
        }
        source.style.opacity = iFadeIn / 100;
    }, 10);
}

function changeImgToAct3(){
    var source = document.getElementById("activity-picture");

    var img = "img/实践/新闻中心.jpg";
    source.src = img;

    var fadeIn = null;
    clearInterval(fadeIn);
    var iFadeIn = 0;
    var step = 1;

    fadeIn = setInterval(function () {
        iFadeIn += step;
        if (iFadeIn >= 100) {
            iFadeIn = 100;
            clearInterval(fadeIn);
        }
        source.style.opacity = iFadeIn / 100;
    }, 10);
}

function changeImgToAct4(){
    var source = document.getElementById("activity-picture");

    var img = "img/实践/浙江省博物馆.jpg";
    source.src = img;

    var fadeIn = null;
    clearInterval(fadeIn);
    var iFadeIn = 0;
    var step = 1;

    fadeIn = setInterval(function () {
        iFadeIn += step;
        if (iFadeIn >= 100) {
            iFadeIn = 100;
            clearInterval(fadeIn);
        }
        source.style.opacity = iFadeIn / 100;
    }, 10);
}

//更换手风琴中加号和减号的图标
$(".my-accordion").on("hide.bs.collapse show.bs.collapse", x => {
    $(x.target)
        .prev()
        .find("i:last-child")
        .toggleClass("fa-minus fa-plus");
});


//悬停出现二维码
$('#QQ').popover({
    trigger : 'hover',
    html:true,
    content:"<img src='img/二维码/QQ二维码.jpg' width='200px'>",
});
$('#wechat').popover({
    trigger : 'hover',
    html:true,
    content:"<img src='img/二维码/微信二维码.jpg' width='200px'>"
});
$('#dingding').popover({
    trigger : 'hover',
    html:true,
    content:"<img src='img/二维码/钉钉二维码.jpg' width='200px'>"
});
$('#alipay').popover({
    trigger : 'hover',
    html:true,
    content:"<img src='img/二维码/支付宝二维码.jpg' width='200px'>"
});

//向下滑动导航栏消失，向上滑动导航栏出现
$(function(){
    var start_height = $(document).scrollTop();
    var navigation_height = $('.navbar').outerHeight();
    $(window).scroll(function() {
        var end_height = $(document).scrollTop();
        if (end_height > navigation_height){
            $('.navbar').css('top', '-50px');
        }else {
            $('.navbar').css('top', '0');
        }
        if (end_height < start_height){
            $('.navbar').css('top', '0');
        }
        start_height = $(document).scrollTop();
    });
});

//导航栏到达顶部时，背景透明
function topNavScroll(){
    var topScroll = Math.floor($(window).scrollTop());
    if(topScroll <= 30){
        $('.navbar').css('background-color','rgba(52, 58, 64, 0)');
    }else {
        $('.navbar').css('background-color','rgba(52, 58, 64, 1)');
    }
}
$(window).on('scroll',function() {
    topNavScroll();
});

//定义全局变量
var btn = document.querySelector('#message-submit');
var text = document.querySelector('#text-input');
var user = document.querySelector('#name-input');
var ul = document.querySelector('#message-output');
var numberOfComments = 0

//将留言数量信息输出到标题处
var numberOfCommentsOutput = document.getElementById('comments-num-output');
numberOfCommentsOutput.innerHTML = "共" + numberOfComments + "条留言";

//呈现留言信息
btn.onclick = function(){
    if(text.value == '' || user.value == ''){
        alert("您没有输入昵称或内容！")
        return false;
    }else{
        numberOfComments ++;
        numberOfCommentsOutput.innerHTML = "共" + numberOfComments + "条留言"
        var li = document.createElement('li');
        var date = getDateTime();
        var name = user.value
        li.innerHTML = '留言' + numberOfComments + '&nbsp&nbsp' +  '(' + date + ')' + '&nbsp&nbsp&nbsp&nbsp'+ user.value + '：' + text.value;
        //ul.appendChild(li);
        ul.insertBefore(li, ul.children[0])
    }
    user.value='';
    text.value='';
}

//获取日期时间
function getDateTime() {
    var d = new Date();
    var month = d.getMonth() + 1;
    return d.getFullYear() + "-" + month + "-" + d.getDate() + "&nbsp&nbsp" + d.getHours() + " : " + d.getMinutes();
}
$(function () {
    var num = 60;
    var timer = null;
    $('.center-3').on('click', function () {
        clearInterval(timer);
        timer = setInterval(function () {
            num--;
            $('.center-3').html( num + "秒").css( "color","red");
            if (num<=0) {
                clearInterval(timer);
                num = 60;
                $('.center-3').html(" 重新获取验证码").css( "left","4rem");
            }
        }, 1000);
    });
})
var phone = false;
$('.one').blur(function () {
        if ((/^1[34578]\d{9}$/).test($(".one").val())) {
            $('.two').html("输入正确，请进行下一步").css("color", "green");
            phone = true;
        } else {
            $('.two').html("请输入正确的手机号码").css("color", "red","top","-0.1rem");
            phone = false;
        }
    });
var  message=false;
$('.three').blur(function () {
        if ((/^[0-9]{4,8}$/).test($('.three').val())){
            $('.four').html("输入正确，请进行下一步").css("color", "green");
          message = true;
        } else {
            $('.four').html("输入格式错误，请重新输入").css("color", "red");
            message = false;
        }
    });
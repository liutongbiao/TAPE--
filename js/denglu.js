var user=false;
var password=false;
$('.one').blur(function () {
            if ((/^[\u4e00-\u9fa5A-Za-z0-9-_]{4,8}$/).test($(".one").val())) {
                $('.two').html("输入正确，请进行下一步").css("color", "green", "left","1rem");
                user_Boolean = true;
            } else {
                $('.two').html("输入格式错误，请重新输入").css("color", "red");
                user_Boolean = false;
            }
        });
// password 密码
        $('.three').blur(function () {
            if ((/^[a-z0-9_-]{6,16}$/).test($(".three").val())) {
                $('.four').html("输入正确，请进行下一步").css("color", "green");
                password_Boolean = true;
            } else {
                $('.four').html("输入格式错误，请重新输入").css("color", "red");
                password_Boolean = false;
            }
        });

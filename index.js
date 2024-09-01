$(document).ready(function () {
    $(window).scroll(function() {
        if(scrollY > 10) {
            console.log("Log");
            $("header").css('background-color', '#fff');
            $(".logo").css('color', '#000');
        }
        else {
            $("header").css('background-color', 'transparent');
            $(".logo").css('color', '#fff');
        }
    })
})
var globalCaps = false;
var globalShift = false;

$(".right-shift").click(function () {
    if (globalShift == false) {
        globalShift = true;
        $(this).css("color", "#3ADF00");
        $(".off").css("display", "none");
        $(".on").css("display", "block");
    } else {
        globalShift = false;
        $(this).css("color", "white");
        $(".off").css("display", "block");
        $(".on").css("display", "none");

    }
});

$(".left-shift").click(function () {
    if (globalShift == false) {
        globalShift = true;
        $(this).css("color", "#3ADF00");
        $(".off").css("display", "none");
        $(".on").css("display", "block");
    } else {
        globalShift = false;
        $(this).css("color", "white");
        $(".off").css("display", "block");
        $(".on").css("display", "none");

    }
});

$(".capslock").click(function () {
    if (globalCaps == false) {
        globalCaps = true;
        $(this).css("color", "#3ADF00");
    } else {
        globalCaps = false;
        $(this).css("color", "white");
    }
});
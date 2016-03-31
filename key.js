var capsLock = false;
var shift = false;

$("td").mouseenter(function () {
    $(this).addClass("hover");
});

$("td").mouseleave(function () {
    $(this).removeClass("hover");
});

$("td").mousedown(function () {
    $(this).addClass("keydown");
});

$("td").mouseup(function () {
    $(this).removeClass("keydown");
});

$(".right-shift").click(function () {
    if (shift == false) {
        shift = true;
        $(this).css("color", "#3ADF00");
        $(".off").css("display", "none");
        $(".on").css("display", "block");
        $(".letter").css("text-transform", "uppercase");

    } else {
        shift = false;
        $(this).css("color", "white");
        $(".off").css("display", "block");
        $(".on").css("display", "none");
        $(".letter").css("text-transform", "lowercase");

    }
});

$(".left-shift").click(function () {
    if (shift == false) {
        shift = true;
        $(this).css("color", "#3ADF00");
        $(".off").css("display", "none");
        $(".on").css("display", "block");
        $(".letter").css("text-transform", "uppercase");

    } else {
        shift = false;
        $(this).css("color", "white");
        $(".off").css("display", "block");
        $(".on").css("display", "none");
        $(".letter").css("text-transform", "lowercase");

    }
});

$(".capslock").click(function () {
    if (capsLock == false) {
        capsLock = true;
        $(this).css("color", "#3ADF00");
        $(".letter").css("text-transform", "uppercase");
    } else {
        capsLock = false;
        $(this).css("color", "white");
        $(".letter").css("text-transform", "lowercase");

    }
});
// home page
function openNav() {
    if ($("#theSideNav").width() == "250") {
        closeNav();
    } else {
        $("#theSideNav").width("250px");
        $("#basic").css("margin-left", "250px");
    }
}

function closeNav() {
    $("#theSideNav").width("0px");
    $("#basic").css("margin-left", "0px");
}

$("a").click(function () {
    let secId = $(this).attr("href");

    if ($(sectionId).offset() != undefined) {
        let positionOfSec = $(secId).offset().top;

        $("html , body").animate({
            scrollTop: positionOfSec
        }, 1500);
    }
})

// singer page
$(document).ready(function () {
    $("#singers p:first").css("display", "block");
    $("#singers h3").click(function () {
        $(this).next().slideToggle(500);
        $("#singers p").not($(this).next()).slideUp(500);
    });
});

// counter page 
function countdown() {
    let live = new Date();
    let eventDate = new Date(2023, 5, 1);

    let currentTime = live.getTime();
    let eventTime = eventDate.getTime();
    let thatTime = eventTime - currentTime;
    
    let s = Math.floor(thatTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = "<h4>" + d + " D" + "</h4>";
    document.getElementById("hours").innerHTML = "<h4>" + h + " h" + "</h4>";
    document.getElementById("mins").innerHTML = "<h4>" + m + " m" + "</h4>";
    document.getElementById("seconds").innerHTML = "<h4>" + s + " s" + "</h4>";

    setTimeout(countdown, 1000);
}
countdown();

// join us page
$(function () {
    let maxChar = 100;
    $("textarea").keyup(function () {
        let length = $(this).val().length;
        let character = maxChar - length;
        if (character <= 0) {
            $("#characyer").text("your available character finished");
        } else {
            $("#characyer").text(character);
        }
    });
});
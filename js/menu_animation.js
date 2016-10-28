$(document).ready(function() {
    $("#clickMe").one("click", function() {
        $("#tabs").fadeOut(), $("#stable").removeClass("zIndex2"), $("clickMe").removeClass("zIndex2"), $(".fr").addClass("zIndex2"), $("#clickMe").velocity("fadeOut", {
            duration: 500
        }), $("#clickMe").hide(), $("#fr7").velocity({
            top: "+68%",
            left: "+80%",
            opacity: 1
        }, 2500), $("#png").velocity({
            left: "-10%"
        }, 2500), $("#fr6").velocity({
            top: "53%",
            left: "85%",
            opacity: 1
        }, 2500), $("#fr5").velocity({
            top: "40%",
            left: "88%",
            opacity: 1
        }, 2500), $("#fr4").velocity({
            top: "27%",
            left: "85%",
            opacity: 1
        }, 2500), $("#fr3").animate({
            top: "14%",
            left: "78%",
            opacity: 1
        }, 2500), $("#fr1").animate({
            top: "16%",
            left: "+65%",
            opacity: 1
        }, 2500), $("#fr2").velocity({
            top: "27%",
            left: "+70%",
            opacity: 1
        }, 2500), $("#fr8").velocity({
            top: "40%",
            left: "73%",
            opacity: 1
        }, 2500), $("#fr10").velocity({
            top: "53%",
            left: "+70%",
            opacity: 1
        }, 2500), $("#fr9").velocity({
            top: "65%",
            left: "+65%",
            opacity: 1
        }, 2500), $("#1-1").velocity({
            top: "20%",
            left: "99   %",
            opacity: 1
        }, 4e3).hide(100), $("#1-2").velocity({
            top: "40%",
            left: "-4%",
            opacity: 1
        }, 7500).hide(100), $("#1-3").velocity({
            top: "40%",
            left: "99%",
            opacity: 1
        }, 5e3).hide(100), $("#1-4").velocity({
            top: "50%",
            left: "99%",
            opacity: 1
        }, 3500).hide(100), $("#2-1").velocity({
            top: "60%",
            left: "-1%",
            opacity: 1
        }, 4e3).hide(100), $("#2-2").animate({
            top: "5%",
            left: "-1%",
            opacity: 1
        }, 7e3).hide(100), $("#2-3").velocity({
            top: "80%",
            left: "99%",
            opacity: 1
        }, 6e3).hide(100), $("#2-4").velocity({
            top: "30%",
            left: "-1%",
            opacity: 1
        }, 4500).hide(100), $("#3-1").velocity({
            top: "45%",
            left: "99%",
            opacity: 1
        }, 3e3).hide(100), $("#3-2").velocity({
            top: "20%",
            left: "-1%",
            opacity: 1
        }, 7500).hide(100), $("#3-3").velocity({
            top: "10%",
            left: "-1%",
            opacity: 1
        }, 5e3).hide(100), $("#3-4").velocity({
            top: "75%",
            left: "-1%",
            opacity: 1
        }, 6e3).hide(100), $("#4-1").velocity({
            top: "80%",
            left: "99%",
            opacity: 1
        }, 3500).hide(100), $("#4-2").velocity({
            top: "35%",
            left: "99%",
            opacity: 1
        }, 4e3).hide(100), $("#4-3").velocity({
            top: "50%",
            left: "99%",
            opacity: 1
        }, 5e3).hide(100), $("#4-4").velocity({
            top: "70%",
            left: "-1%",
            opacity: 1
        }, 4e3).hide(100)
    })
});
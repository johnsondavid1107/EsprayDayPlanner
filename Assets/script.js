$(document).ready(function () {

    var time = (moment().format("dddd MMM Do YY"));
    console.log(moment().format("dddd MMM Do YY"));
    $("#currentDay").text(time);
    var currentH = (moment().format("H"));


    // var timeArea = {
    //     hour: $(".hour"),
    //     textArea: $("textarea"),
    //     save: $(".saveBtn"),

    // };



    // function logEvent() {
    $(".saveBtn").on("click", function () {
        var store = $(this).siblings(".description").val();
        var value = $(this).siblings(".description").data("value");

        localStorage.setItem("notes", JSON.stringify({[value]:store}));

        console.log(value,store);


    })
    // logEvent();

    // var allId = $("textarea");


    // $("#").each(function () {
    //     // var storeParent = $("<id>").attr();
    //     if ($(this).val() < currentH) {
    //         $(this).attr("class", "future");
    //     // } else {
    //     //     $(this).attr("class", "present");
    //     //     console.log(currentH);
    //     }
    // });



    $(".time").each(function () {

        var time = $(this).attr("data-time");

        // console.log("time", typeof time);
        // console.log(typeof currentH);

        if (Number(time) < Number(currentH)) {
            $("#" + time).addClass("past");
        } else if (Number(time) === Number(currentH)) {
            $("#" + time).addClass("present");
        } else {
            $("#" + time).addClass("future");
        }

    })




    //target id as attr


});


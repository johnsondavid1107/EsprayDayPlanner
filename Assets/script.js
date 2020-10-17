$(document).ready(function () {

    var time = (moment().format("dddd MMM Do YY"));
    console.log(moment().format("dddd MMM Do YY"));
    $("#currentDay").text(time);
    var currentH = parseInt(moment().format("H"));



    // function logEvent() {
    $(".saveBtn").on("click", function () {
        var store = $(this).siblings(".description").val();
        var value = $(this).siblings(".description").attr("data-value");

        var listOfItems = {
            value: value,
            store: store
        };


        var grandList= localStorage.getItem("notes");

        if (!grandList) {
            grandList = []
        }else{ 
            grandList = JSON.parse(grandList);
        }

    
        grandList.push(listOfItems);
    
        localStorage.setItem("notes", JSON.stringify(grandList));

        console.log(grandList);

        


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

        var time = parseInt($(this).attr("data-time"));

        // console.log("time", typeof time);
        // console.log(typeof currentH);

        if (time < currentH) {
            $("#" + time).addClass("past");
        } else if (time === currentH) {
            $("#" + time).addClass("present");
        } else {
            $("#" + time).addClass("future");
        }

    })




    //target id as attr


});


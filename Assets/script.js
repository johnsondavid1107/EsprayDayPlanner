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


        var grandList = localStorage.getItem("notes");

        if (!grandList) {
            grandList = []
        } else {
            grandList = JSON.parse(grandList);
        }


        grandList.push(listOfItems);

        localStorage.setItem("notes", JSON.stringify(grandList));

        console.log(listOfItems);


    })
var newParse = (localStorage.getItem("notes"));
newParse = JSON.parse(newParse);



    $(".description").each(function () {
        for (var i = 0; i < newParse.length; i++){

     if ($(this).attr("data-value") == newParse[i].value)

     $(this).text(newParse[i].store);
        }
     
        // var value = parseInt($(this).attr("data-value"));
        // if(value === notes:value){

        //     .de
        // }

        // console.log(value);
        // $(this).text(localStorage.getItem("notes"));

    })






    // $("textarea").val(localStorage.getItem("15"));




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


});


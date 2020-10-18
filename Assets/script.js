$(document).ready(function () {

    var time = (moment().format("dddd MMM Do YY"));
    var hourOfDay = (moment().format("HH mm"));
    $("#currentDay").text(time);
    $(".time-block").text("The current time is: " + hourOfDay);
    var currentH = parseInt(moment().format("H"));
    var newParse = (localStorage.getItem("notes"));


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
    console.log(currentH);

    $(".time").each(function () {

        var time = parseInt($(this).attr("data-time"));


        if (time < currentH) {
            $("#" + time).addClass("past");
        } else if (time === currentH) {
            $("#" + time).addClass("present");
        } else {
            $("#" + time).addClass("future");
        }

    })

    if (localStorage.getItem("notes") === null) {
        return false;
    } else {
        newParse = JSON.parse(newParse);
        $(".description").each(function () {
            for (var i = 0; i < newParse.length; i++) {

                if ($(this).attr("data-value") == newParse[i].value)

                    $(this).text(newParse[i].store);
            }


        })

    }


});


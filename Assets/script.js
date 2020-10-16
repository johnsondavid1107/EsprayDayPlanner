$(document).ready(function () {

    var time = (moment().format("dddd MMM Do YY"));
    console.log(moment().format("dddd MMM Do YY"));
    $("#currentDay").text(time);

    var timeArea = {
        hour: $(".hour"),
        textArea: $("textarea"),
        save: $(".saveBtn"),

    };



    function logEvent() {
        $(".saveBtn").on("click", function () {
            var store = $(this).siblings(".description").val();
            // var storeParent = $(this).parent().attr("id");
            //target id as attr


            // var test = $(this.$("textarea")).val();
            // localStorage.setItem(store);
            console.log(store);
        });

    }
    logEvent();

   
  

});


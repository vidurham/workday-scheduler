var today = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(today);

$(".time-block").each(function() {
    var id = $(this).attr("id");
    var save = localStorage.getItem(id);
    
    if (save !== null) {
        $(this).children(".description").val(save);
    }
})

$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    console.log(text);
    var time = $(this).parent().attr("id");
    console.log(time, text);
    localStorage.setItem(time, text);
});

var background = function() {
    var currentHour = moment().hours();
    $(".time-block").each(function() {
        var timeId = parseInt($(this).attr("id"));
        if (timeId < currentHour) {
            $(this).addClass("past");
        }
        else if (timeId === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}   

background()
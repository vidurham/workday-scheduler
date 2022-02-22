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


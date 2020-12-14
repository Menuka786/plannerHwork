// This will display current date




var currentTime = $("#currentDay").text(new Date());

// Assigning variable to html text id

var A9Am=$("#me9");
var A10Am=$("#me10");
var A9Am=$("#me11");
var A10Am=$("#me12");
var A9Am=$("#me13");
var A10Am=$("#me14");
var A9Am=$("#me15");
var A10Am=$("#me16");
var A9Am=$("#me17");


$("button").on("click", function()
{
localStorage.setItem("9AM", document.querySelector('#me9').value)
localStorage.setItem("10AM", document.querySelector('#me10').value)
localStorage.setItem("11AM", document.querySelector('#me11').value)
localStorage.setItem("12PM", document.querySelector('#me12').value)
localStorage.setItem("1PM", document.querySelector('#me13').value)
localStorage.setItem("2PM", document.querySelector('#me14').value)
localStorage.setItem("3PM", document.querySelector('#me15').value)
localStorage.setItem("4PM", document.querySelector('#me16').value)
localStorage.setItem("5PM", document.querySelector('#me17').value)


});
function pastPresentFuture() {
    var nowTime = moment().format('LT')
console.log(nowTime);
var textDescription =  $(".col-sm-1 hour");
console.log(textDescription)

        if (nowTime > textDescription) {
            $(".description").addClass("future")
        }
        else if (currentTime === textDescription) {
            $(".description").addClass("present");
        }
        else {
            $(".description").addClass("past");
        }
    };
  

pastPresentFuture();
















































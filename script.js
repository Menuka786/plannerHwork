
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

// Following functions will store text value to the local storage.

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

function restoreFromLocalStorage(){
  document.querySelector('#me9').value = localStorage.getItem("9AM")
  document.querySelector('#me10').value = localStorage.getItem("10AM")
  document.querySelector('#me11').value = localStorage.getItem("11AM")
  document.querySelector('#me12').value = localStorage.getItem("12PM")
  document.querySelector('#me13').value = localStorage.getItem("1PM")
  document.querySelector('#me14').value = localStorage.getItem("2PM")
  document.querySelector('#me15').value = localStorage.getItem("3PM")
  document.querySelector('#me16').value = localStorage.getItem("4PM")
  document.querySelector('#me17').value = localStorage.getItem("5PM")

}
// Following function will change color of the text input as per past, present and future.

function pastPresentFuture() {
 //assigning value for current time
    var nowTime = new Date().getHours()
//adding for loop to find current time and add the past future and present class.

  for(var i=9; i<=17; i++){
    if (nowTime > i) {
        $("#me"+i).addClass("past")
    }
    else if (nowTime === i) {
        $("#me"+i).addClass("present");
    }
    else {
        $("#me"+i).addClass("future");
    }
  }

};
// Here calling restoreFormLocal Storage function and pastPresentFuture function.
restoreFromLocalStorage();
pastPresentFuture();

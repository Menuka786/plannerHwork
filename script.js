// This will display current date
$("#currentDay").text(new Date());

// this will save text to local storage 

$("button").on("click", function()

{
  localStorage.setItem("boxvalue", document.querySelector('.description').value);
console.log("this");
 });
















































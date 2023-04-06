// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var $container = $('.container-lg.px5');
var $hours = $container.find('[id^="hour-"]');

$(document).ready(function () {
  $("#myButton").click(function() {
    $(this).attr(localStorage)
  });
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $("9r").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
  $("10r").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
  $("11r").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
  $("12r").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
  $("1r").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
  $("2r").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
  $("3r").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
  $("4r").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
  $("5r").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  //
  // TODO: Add code to display the current date in the header of the page.
});

function updateClock() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  $("#currentDay").text(rightNow);
}

$(document).ready(function(){
  setInterval('updateClock()', 1000);
});



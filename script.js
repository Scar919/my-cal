// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function() {

var $container = $('.container-lg.px5');
var $hours = $container.find('[id^="hour-"]');

  $("#9r").attr("data-time", "09");
  $("#10r").attr("data-time", "10");
  $("#11r").attr("data-time", "11");
  $("#12r").attr("data-time", "12");
  $("#13r").attr("data-time", "13");
  $("#14r").attr("data-time", "14");
  $("#15r").attr("data-time", "15");
  $("#16r").attr("data-time", "16");
  $("#17r").attr("data-time", "17");

  function renderPlans() {
      for (var i = 9; i <= 17; i++) {
        $("#" + i + "r").val(localStorage.getItem(i));
      }
    }
    renderPlans();



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  for (var i = 0; i <= 17; i++) {
  var inputH = $("#" + i +"r").attr("data-time");
  var inputHInt = parseInt(inputH);

  $hours.each(function() {
    var hourId = $(this).attr("id").replace("hour-", "");
    var hourInt = parseInt(hourId);

    if (hourInt > inputHInt) {
      $("#" + inputH + "r").addClass("past");
    }
    if (hourInt === inputHInt) {
      $("#" + inputH + "r").addClass("present");
    }
    if (hourInt < inputHInt) {
      $("#" + inputH + "r").addClass("future");
    }
  });
}

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  $(".saveBtn").on("click", function() {
    var rowHour = $(this).attr("data-hour");
    var input = $("#" + rowHour + "r").val();
    localStorage.setItem(rowHour, input);
  });

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 
 
  
  //
  // TODO: Add code to display the current date in the header of the page.


function updateClock() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  $("#currentDay").text(rightNow);
}

$(document).ready(function(){
  setInterval(updateClock, 1000);
});
});


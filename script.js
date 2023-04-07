// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {

var $container = $('.container-lg.px5');
var $hours = $container.find('[id^="hour-"]');
//added attribute for the div id's
  $("#9r").attr("data-time", "09");
  $("#10r").attr("data-time", "10");
  $("#11r").attr("data-time", "11");
  $("#12r").attr("data-time", "12");
  $("#1r").attr("data-time", "13");
  $("#2r").attr("data-time", "14");
  $("#3r").attr("data-time", "15");
  $("#4r").attr("data-time", "16");
  $("#5r").attr("data-time", "17");
  

  function renderPlans() {
      for (var i = 9; i <= 17; i++) {
        $("#" + i + "r").val(localStorage.getItem(i));
      }
    }
    renderPlans();



  //added functions for the "past", "present", and "future" time slots to change color
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

  //added save button to keep all data stored 
  $(".saveBtn").on("click", function() {
    var rowHour = $(this).attr("data-hour");
    var input = $("#" + rowHour + "r").val();
    localStorage.setItem(rowHour, input);
  });

//added functioning clock to show on header
function updateClock() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  $("#currentDay").text(rightNow);
}

$(document).ready(function(){
  setInterval(updateClock, 1000);
});
});


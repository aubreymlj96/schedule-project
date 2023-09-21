// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$( ".time-block" ).wrapAll( "<div class='.description' />");

//Source for date format: https://www.javatpoint.com/use-of-moment-js-to-change-date-format-in-jquery

// var unixFormat = dayjs.unix(1318781876).format('MM D, YYYY, hh:mm:ss a');
//The function(event) below engages the present day/time at the top of the page, as well as the unix format
//Identifies the time/text to send to local storage
//Enables the functionality of the save button
  $(document).ready(function (event) {
    $('#currentDay').text(moment().format('MM/D/YYYY, hh:mm:ss a'));
    $('.saveBtn').on('click', function () {
      
      console.log(this);

      var text = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');

      localStorage.setItem(time, JSON.stringify(text));

      pageLoad();

    })
    .saveBtn; $("<div>").text(event.timeStamp);

    });

//The pageLoad function sets up the page so the schedule events are retained when the page is refreshed
function pageLoad(){

      $('#hour-9').children([1]).val(JSON.parse(localStorage.getItem('hour-9')));
      $('#hour-10').children([1]).val(JSON.parse(localStorage.getItem('hour-10')));
      $('#hour-11').children([1]).val(JSON.parse(localStorage.getItem('hour-11')));
      $('#hour-12').children([1]).val(JSON.parse(localStorage.getItem('hour-12')));
      $('#hour-13').children([1]).val(JSON.parse(localStorage.getItem('hour-13')));
      $('#hour-14').children([1]).val(JSON.parse(localStorage.getItem('hour-14')));
      $('#hour-15').children([1]).val(JSON.parse(localStorage.getItem('hour-15')));
      $('#hour-16').children([1]).val(JSON.parse(localStorage.getItem('hour-16')));
      $('#hour-17').children([1]).val(JSON.parse(localStorage.getItem('hour-17')));

    }

  // let schedule = document.getElementById("schedule");

  // let list = document.createElement("div");
  // list.innerHTML = "next-day";

//   // schedule.appendChild(list);

// $('#top').children().eq(4).append($('<div id="hour-13></div>'));

//The following function apply the past, present, or future class to each 
//time block by comparing the id to the current hour.
function recordTime(){
  var currentHour = moment().hour();

  $('.time-block').each(function(){
    let savedHour = ($(this).attr('id').split("hour-")[1]);
    console.log(savedHour, currentHour);
    if(savedHour < currentHour){
      $(this).addClass('past');
      $(this).removeClass('future');
      $(this).removeClass('present');
    } else if(savedHour == currentHour){
      $(this).removeClass('past');
      $(this).addClass('present');
      $(this).removeClass('future');
    } else {
      $(this).removeClass('present');
      $(this).removeClass('past');
      $(this).addClass('future');
    }
  })

}

recordTime();
pageLoad();

    


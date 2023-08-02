// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

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
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
$(function () {
  var timeBlock = $('.time-block')
  var now = new Date();
  var time = now.getHours();
  var timeBlocksDiv = $('.container-lg');

  // to ensure the time works and displays the current hour
  console.log(time);

  // displays the day of the week, the month, and the numerical day in the header
  var date = dayjs().format('dddd, MMMM DD');
  $('#currentDay').text(date);

  // this takes the timeBlock var and splits the id so that the number of the id is taken, then compared to the time of day
  // then the class is changed based on the time of day to change the color of the text boxes
  $.each(timeBlock, function() {
    var blockHour = $(this).attr("id").split("-")[1];
    if (blockHour == time) {
      $(this).addClass('present')
    } else if (blockHour < time) {
      $(this).addClass('past')
    } else if (blockHour > time) {
      $(this).addClass('future')
    }
})

// Although a for loop would work better here, I was still in the process of 
// adding one here. The purpose of saveText function is to pull stored data from the
// internal storage, although it would be better written with a for loop which
// I will work on in the future
 function saveText() {
     // for (i = 9; i < timeBlock.length; i++) {
     //   $(i > "textarea").val(localStorage.getItem(i));
    //  }
    $("#hour-9 > textarea").val(localStorage.getItem("hour-9"));
    $("#hour-10 > textarea").val(localStorage.getItem("hour-10"));
    $("#hour-11 > textarea").val(localStorage.getItem("hour-11"));
    $("#hour-12 > textarea").val(localStorage.getItem("hour-12"));
    $("#hour-13 > textarea").val(localStorage.getItem("hour-13"));
    $("#hour-14 > textarea").val(localStorage.getItem("hour-14"));
    $("#hour-15 > textarea").val(localStorage.getItem("hour-15"));
    $("#hour-16 > textarea").val(localStorage.getItem("hour-16"));
    $("#hour-17 > textarea").val(localStorage.getItem("hour-17"));
}

// Below is code used to identify the item on the website that saves
// the data for retrieval in text boxes. By treversing the DOM tree,
// the save button is connected to the text area, which is the 
// target of the text that is supposed to be saved. From there, it is
// connected to the parent element through hourTextStorage and retrieved
// through the id and applying the information to the textareaEl,
// where the text that needs to be retrieved is stored
  
  timeBlocksDiv.on('click', '.saveBtn', function () {
    var saveButton = $(this)[0];
    var textareaEl = saveButton.parentElement.children[1];
    var hourTextStorage = saveButton.parentElement;
    localStorage.setItem(hourTextStorage.getAttribute("id"), textareaEl.value); 
  });

saveText();  

})
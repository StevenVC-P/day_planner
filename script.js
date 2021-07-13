// variables created using Moment used for creating hour day at the top of page 
//and to change color of blocks based on users current hour.
var today = moment();

var currentHour = moment().format('HH'); 

//simply pulling the block the elements from the html, to append elements created on .js
var containerEl = $('.container');
var jumboTron = $('.jumboTron');

//this is the array the .js builds itself around.  Starts as an empty array on reloads and if local storage is empty
var arrayTime = JSON.parse(localStorage.getItem("userInput")) || [];
console.log(arrayTime);
console.log(arrayTime[2])

//created div element to display current day, and to input the value from moment
$("#currentDay").text(today.format("dddd, MMM Do"));

//creating array structure will be built on and data the array of objects will need.
if (arrayTime.length == 0){
    for ( i = 7; i < 18; i++ ) {
        if (i > 12 ){
        var j = i - 12
        } else {
            j = i
        }
        var hourBlock = 
        {
            militaryTime: i,
            hour: j,
            meridiem:"a.m.",
            actText:""
        }
        if (i > 11 ){
        hourBlock.meridiem = "p.m"
        }

        arrayTime.push(hourBlock);
    }
};
//color codes the hour if past present or future
function checkHour (textAreaEl, index) {
    if (arrayTime[index].militaryTime == currentHour) {
        textAreaEl.addClass('present');
    } else if (arrayTime[index].militaryTime < currentHour) {
        textAreaEl.addClass('past');
    } else {
        textAreaEl.addClass('future');
    }
}

//creating structure of page, for the lgnth of the array, a row is created that contains the hour, a textbox and a button.
arrayTime.forEach(function (hourBlock, index) {
        var rowEl = $('<div>');
        rowEl.addClass('row');
        var hourEl = $('<div>');
        hourEl.addClass('time-block hour col-1');
        hourEl.text(hourBlock.hour +" "+ hourBlock.meridiem);

        var textAreaEl = $('<textarea>');
        textAreaEl.addClass('col-10');
        textAreaEl.attr('data-index', index);
        textAreaEl.text(hourBlock.actText); 

        checkHour(textAreaEl, index);  //function on line 42

        var buttonEl = $('<button><i class="fas fa-save fa"></i>');
        buttonEl.addClass('saveBtn col-1');

        rowEl.append(hourEl);
        rowEl.append(textAreaEl);
        rowEl.append(buttonEl);

        containerEl.append(rowEl);
});

//function to watch for the click of the save button for the textbox within the same row.
containerEl.on('click', '.saveBtn' ,function(){
    //located the textbox to save based on the button clicked
    var textAreaObj = $(this).siblings('textarea');
    //takes users's input, the custom data attribute of the text area, and stores it into a variable
    var textAreaIndex = textAreaObj.attr('data-index');
    //taking the value from the custom data attribute and adding it to the index of the object which the textbox sits as new key value.
    console.log(textAreaObj);
    console.log(textAreaIndex);
    arrayTime[textAreaIndex].actText = textAreaObj.val();
    console.log(arrayTime);

    //settimeblock array to be an empty array
    localStorage.setItem("userInput", JSON.stringify(arrayTime));
});
//goals for 3/17
//create a loop for hour elements

//steps code news
//code is going to need to know where to put the elements
//the order of the elements
//when to create the next line of elements

//going to crate a variable to main element


var containerEl = $('.container');

var arrayTime =[];


for ( i = 9; i < 18; i++ ) {
    if (i > 12 ){
    var j = i - 12
    } else {
        j = i
    }
    var hourBlock = 
    {
        hour: j,
        morning:true,
        meridiem:"a.m."
    }
    if (i > 11 ){
     hourBlock.morning = false
    }
    if (hourBlock.morning == false){
        hourBlock.meridiem = "p.m."
    }

    arrayTime.push(hourBlock);
}

arrayTime.forEach(function (hourBlock) {
        var rowEl = $('<div>');
        rowEl.addClass('row');
        var hourEl = $('<div>');
        hourEl.addClass('hour');
        hourEl.text(hourBlock.hour + hourBlock.meridiem);
        console.log(hourEl);
        var textAreaEl = $('<textarea>');
        var buttonEl = $('<button>');
        buttonEl.addClass('saveBtn');

        rowEl.append(hourEl);
        rowEl.append(textAreaEl);
        rowEl.append(buttonEl);

        containerEl.append(rowEl);
});



        // var list = $('');
        // hsBox.appendChild(list);
        // var li = document.createElement("li");
        // li.textContent = (player + "-" + newScore);
        // list.appendChild(li);

console.log(arrayTime);

    //for each of these call class from styles
    //create element row
    //create element hour
    //create element text
    //create element saveBtn

    //obj hour x
    //  HOUR: String
    //  textbox: empty
    //  savebutton: button?


    //append row to container
    //append hour to row
    //append text to row
    //append .savebuttn to row

//iterate over arry over div container




    //append everything to row then container?  Gary advice

    //put objects into the arry here?
    //yeah we can create earch row as an object?
    //then display from here?

    //loop doing to much?
//}



//function to save click element (.on)

//call a function to create save here?

//function to pull information from local storage?


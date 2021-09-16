//get values from page
//controller function
function getValues(){
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //parse numbers into integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //validate user input
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        //call fizzBuzz
        let fbArray = fizzBuzz(fizzValue,buzzValue);

        //call displayNumbers
        displayData(fbArray);
    } else{
        alert("Please enter an integer");
    }
}

//generate the numbers
//logic function
function fizzBuzz(fizzValue,buzzValue){
    let returnArray = [];

    for(let i = 1; i <= 100; i++){
        if(i % fizzValue == 0 && i % buzzValue == 0){
            returnArray.push('FizzBuzz');
        } else if(i % fizzValue == 0){
            returnArray.push('Fizz');
        } else if(i % buzzValue == 0){
            returnArray.push('Buzz');
        } else {
            returnArray.push(i)
        }
    }
    return returnArray;
}

//display numbers to the screen
//view function
function displayData(fbArray){
    
    //get the tbody element from the html page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    //loop over the array and create a tablerow for each item.
    for(let index = 0; index < fbArray.length; index += 5){

        let tableRow = document.importNode(templateRow.content, true);

        //grab the td's and put them in an array 
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index+1]);
        rowCols[1].textContent = fbArray[index+1];

        rowCols[2].classList.add(fbArray[index+2]);
        rowCols[2].textContent = fbArray[index+2];

        rowCols[3].classList.add(fbArray[index+3]);
        rowCols[3].textContent = fbArray[index+3];

        rowCols[4].classList.add(fbArray[index+4]);
        rowCols[4].textContent = fbArray[index+4];

        tableBody.appendChild(tableRow);
    }
}
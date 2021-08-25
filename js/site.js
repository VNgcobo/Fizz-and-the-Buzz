//get values from the user. We need to get the fizz amd the buzz value.
function getValues(){
    //get the user values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //parse for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //check if the numbers are integers
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        //fizzBuzz is called
        let fbArray = fizzBuzz(fizzValue,buzzValue);
        
        //displayData is called and the values are written to the screen
        displayData(fbArray);

    } else{
        alert("You must enter numbers!");
    }
   
}

function fizzBuzz(fizzValue, buzzValue){
    //initialise the returnArray
    let returnArray = [];

    //loop from 1 to 100
    //inside this loop, we need to check the current in three steps:
    for(let i = 1; i <= 100; i++){
          
        //check to see if divisible by both (3 and 5) if so push "FizzBuzz" into an array and not the number

        if(i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz');
        }
        //check to see if divisible by fizz value (3) 

        else if(i % fizzValue == 0){

            //if so push "fizz" into an array and not the number
            returnArray.push('Fizz');
        }
        //check to see if divisible by buzz value (5)

        else if(i % buzzValue == 0){    

            //if so push "buzz" into an array and not the number
            returnArray.push('Buzz');
        }
        //else, then push the number into the array

        else{
            returnArray.push(i);
        }
    }

    return returnArray;
}

function displayData(fbArray) {
    //loop over the array and create a tablerow for each item.

    //get the tbody element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index += 5) {
        
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
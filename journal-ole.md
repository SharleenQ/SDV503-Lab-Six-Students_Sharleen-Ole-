Task1: We researched loops and arrays and put some code snips together and tried to get some answers.
But it didn't work as intended so i researched moore about oddsum.
At first i used this as a reference from https://gist.github.com/tacheshun/5587510:
function oddSum(n) {
    var sumSoFar = 0;
    
    var currentNumber = 1;
    while (currentNumber<=n) {

 

        if(currentNumber % 2 == 1 ){
            sumSoFar += currentNumber;
        }
        currentNumber += 1;
    }
    return sumSoFar;
}

 


console.log(oddSum(5));
as a reference to figure out if im on the right track.
Ali gave sharleen a piece of paper with a code snippet and we used the information provided

Task2: We researched Strings and Array and Loops filters
and got through task2 relatively easy

Task3: we made sure that we got the objects working correctly and that everything is displayed.
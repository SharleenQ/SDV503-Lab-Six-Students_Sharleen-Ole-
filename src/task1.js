// ole and sharleen task 1
// Task_1:  Create a function that returns the total of all odd numbers up to and including the given argument. 
// The argument will be given as an odd number when you invoke the function. 
// Ex:  addOddNumbers(5)  -> 9  // 1 + 3 + 5 = 9
// Ex: addOddnumbers(13) -> 49 // 1 + 3 + 5 + 7 + 9 + 11 + 13 = 49

function oddSum(num) {
    let x = [] //the variable x is set to 0
        for (i = 1; i < num; i += 2){ // we created this 4 loop, and it starts from 1, each time it loops ,we add 2 to i. (as long as i is less that the input number it will keep looping)
            x.push[i] // we add the value of i to the variable x  
        }
        return x,to String(,); // this is the output of the whole function
    }
    console.log(oddSum(10))
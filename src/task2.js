// Task_2: Create a function that takes an array of non-negative integers and 
//strings and return a new array without the strings.

// Ex:  filterArr([1, 2, "a", "b"]) -> [1, 2]
// Ex:  filterArr([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
// Note: The given array only has integers and strings.
// Note: Numbers in the array should not repeat.
// Note: The original order must be maintained.

// intergers to stings string to array.

let arr = []
function filter (arr){
for (i = 0; i < arr.length;){
    if (typeof arr[i] == 'string','Cat'){
      arr.pop()  
    }else{
        i++;
    }
}
console.log(arr)} filter(arr)
// Task_2: Create a function that takes an array of non-negative integers and 
//strings and return a new array without the strings.

// Ex:  filterArr([1, 2, "a", "b"]) -> [1, 2]
// Ex:  filterArr([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
// Note: The given array only has integers and strings.
// Note: Numbers in the array should not repeat.
// Note: The original order must be maintained.

// integers to stings string to array.


function filter(arr) {
  let outputArr = []
  for (i = 0; i < arr.length; i++) {  // this loops through the array untill its equal.

    if (typeof arr[i] !== 'string') {
      outputArr.push(arr[i])
    } 
  }
  return (outputArr)
}
console.log(filter([1, 2, '0', '1', '12', 123]));
   

    // functionName();
    // functionName('text');
    // functionName(['text',1,4])
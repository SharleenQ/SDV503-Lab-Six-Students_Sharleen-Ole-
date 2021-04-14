// Task_2: Create a function that takes an array of non-negative integers and 
//strings and return a new array without the strings.

function filter(arr) {
  let outputArr = []
  for (i = 0; i < arr.length; i++) {  // this loops through the array until its equal.

    if (typeof arr[i] !== 'string') {// if string is found string is removed
      outputArr.push(arr[i])
    } 
  }
  return (outputArr)
}
console.log(filter([1, 2, '0', 'a', '12', 123]));

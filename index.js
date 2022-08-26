function hasTargetSum(array, target) {
  // Write your algorithm here
  // iterate through the array to get the first number
for(let i = 0; i < (array.length - 1); i++) {
  // console.log(array[i])
  // iterate over the remaining numbers
   for(let j = (i + 1); j < array.length; j++) {  
      // console.log(array[j])
   if(array[i] + array[j] === target){
    return true
   }}
}
return false
}


/* Write the Big O time complexity of your function here*/
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    // n steps (depending on the length of the input array)
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      // n * n steps (nested loop!)
      if (array[j] === complement) return true;
    }
  }
  // 1 step
  return false;
}

/* 
  Add your pseudocode here
  the function takes in two arguments an array and a number and returns true if any two numbers 
  in the array addds up to the second and returns false if not so

iterate through the array to get the first number
 iterate over the remaining numbers
  if the the first number added to the second number gives results to the second argument
    return true
     else return false



*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

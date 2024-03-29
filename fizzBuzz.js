// Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".
// If the number is a multiple of 3 the output should be "Fizz".
// If the number given is a multiple of 5, the output should be "Buzz".
// If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
// If the number is not a multiple of either 3 or 5, the number should be output on its own as shown in the examples below.
// The output should always be a string even if it is not a multiple of 3 or 5.
// Examples
// <code>fizz_buzz(3) ➞ "Fizz"
// fizz_buzz(5) ➞ "Buzz"
// fizz_buzz(15) ➞ "FizzBuzz"
// fizz_buzz(4) ➞ "4"</code>

let fizzBuzz = function(num) {
    for(let i = 1; i<=num; i++){
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if(i % 3 === 0) {
            console.log("Fizz");
        } else if(i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i.toString());
        }
    }
}
fizzBuzz(15);
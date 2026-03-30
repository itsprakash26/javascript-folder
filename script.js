// Q1  Create two numbers a = 10 and b = 3.
//  Perform and log: a + b, a - b, a * b, a / b, a % b

// let a = 10;
// let b = 3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

/* Q2 Write: let x = 5; x = x + 3;
Now rewrite the same using +=.
Do the same for -=, *=, /=.
*/

// let x = 5;
// // x = x +=3;
// // x = x -=3;
// // x = x *=3;
// x = x /=3;

// console.log(x);

/*Q3  let count = 5;
Use count++ and log value before and after.
Repeat for count–.
*/

// let count = 5;
// count++
// console.log(count);

/*
Q4 Conditional Operators (if, else, else-if, ternary, switch)
  a. Take input using prompt for age.
  If age > 18 → log “Adult”.
  Else → log “Minor”.
*/


let input = prompt("Enter Your Age");

if (input === null) {
  console.error("You pressed cancel");
} else {
  input = input.trim();

  if (input === "") {
    console.error("Please enter a valid number");
  } else {
    let age = Number(input);

    if (isNaN(age)) {
      console.error("Enter age in number");
    } else if (age >= 18) {
      console.log(`Your age is ${age}. You can vote`);
    } else {
      console.log(`Your age is ${age}. You can't vote`);
    }
  }
}




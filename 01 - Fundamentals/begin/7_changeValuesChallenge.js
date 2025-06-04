// In this challenge, you will swap the values of two variables using a temporary variable

// Variable declaration
let breakLine = "\n"
let a = 7
let b = 94
let temp = a
console.log("Values before swapping: a = ", a ," and b = " + b)

a = b // a = 94
b = temp // b = 7
console.log("Values after swapping: a = ", a ," and b = " + b + breakLine)

// There is another, more modern way of making this exchange of values ​​directly and quickly
// I discovered it by reviewing materials on the internet and forums
// Called destructuring assignment, it allows you to exchange values ​​without the need for a temporary variable

let x = 7.46
let y = 9.99
console.log("Values before swapping: x = ", x ," and y = " + y)

// For some reason, the destructuring assignment does not work and I tried to use another way
// [x, y] = [y, x] // This line don't work correctly in this context
// The destructuring assignment works in modern JavaScript environments, but it may not work in all contexts

let [x1, y1] = [y, x] // This line swaps the values of x and y
x = x1
y = y1
console.log("Values after swapping: x = ", x ," and y = " + y + breakLine)

// Another example of destructuring assignment
// This time, I will use the same variables as in the first example, but with different values

x = 10.7
y = 4.465
console.log("Values before swapping: x = ", x ," and y = " + y)

;[x, y] = [y, x] // I used ; to avoid any issues with the previous line
console.log("Values after swapping: x = ", x ," and y = " + y)

// Now, the line 37 works correctly, using ; before the destructuring assignment to ensure it executes properly
// The destructuring assignment is a powerful feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables
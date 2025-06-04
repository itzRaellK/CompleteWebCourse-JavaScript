// In this challenge, I need to create a simple program that will use the data types to perform a mathematical calculation, area of ​​a circumference

// PI * radius * radius - where PI is a constant, radius is a variable that can be changed, and area is the result of the calculation
const PI = 3.141592
let radius = 2.4;
let area = PI * radius * radius // Final calculation for the area of the circumference
area = area.toFixed(2) // Formatting the area to 2 decimal places (NOTED!)

console.log("The value of the area of the circumference is: " + area)
console.log(typeof area) // After I use 'toFixed', the type of area is now a string, because 'toFixed' returns a string representation of the number
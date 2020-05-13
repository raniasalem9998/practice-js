"use strict"
var today = new Date();
console.log(today)
var hourNow = today.getHours();
console.log(hourNow)
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening,Class!';
}
else if (hourNow > 12) {
    greeting = 'Good afternoon,Class!';
}
else if (hourNow >= 0) {
    greeting = 'Good morning!';
}
else {
    greeting = 'Something went wrong!';
}
console.log(greeting)

document.write(`<h3>${greeting}</h3>`);
document.write("<h4>" + greeting +"</h4>");

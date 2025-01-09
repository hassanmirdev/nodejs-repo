// app.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

console.log(`Addition: ${add(5, 3)}`);
console.log(`Subtraction: ${subtract(5, 3)}`);

module.exports = { add, subtract };

/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtracts the second number from the first number.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The difference of the two numbers.
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of the two numbers.
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divides the first number by the second number.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The quotient of the two numbers.
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

console.log(`Addition: ${add(5, 3)}`);
console.log(`Subtraction: ${subtract(5, 3)}`);
console.log(`Multiplication: ${multiply(5, 3)}`);
console.log(`Division: ${divide(5, 3)}`);

module.exports = { add, subtract, multiply, divide };

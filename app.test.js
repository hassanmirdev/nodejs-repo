// app.test.js
const { add, subtract } = require('./app');

test('adds 5 + 3 to equal 8', () => {
  expect(add(5, 3)).toBe(8);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

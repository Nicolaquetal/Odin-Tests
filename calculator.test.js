const calculator = require('./calculator');

test('Add 1 3', () => {
  expect(calculator.add(1,3)).toBe(4);
});
test('Multiply 4 8', () => {
    expect(calculator.multiply(4,8)).toBe(32);
  });
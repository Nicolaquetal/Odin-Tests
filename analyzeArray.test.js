const analyzeArray = require('./analyzeArray');

test('[1,3]', () => {
  expect(analyzeArray([1,3])).toEqual({ average: 2, min: 1, max: 3, length: 2 });
});
test('[1,8,3,4,2,6]', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
  });
const reverseString = require('./reverseString');

test('Azertyuiop', () => {
  expect(reverseString("Azertyuiop")).toBe("poiuytrezA");
});
test('plomBier', () => {
    expect(reverseString("plomBier")).toBe("reiBmolp");
  });
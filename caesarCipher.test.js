const caesarCipher = require('./caesarCipher');

test('aBcz', () => {
  expect(caesarCipher("aBcz")).toBe("bCda");
});
test('tY# po,Z', () => {
    expect(caesarCipher("tY# po,Z")).toBe("uZ# qp,A");
  });
const isRightTriangle = require('./isRightTriangle');

test('3, 4, 5 is right triangle', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
});

test('-3, 4, 5 is not right triangle', () => {
    expect(isRightTriangle(-4, 5, 6)).toBe(false);
});

test('0, 4, 5 is not Right Triangle', () => {
    expect(isRightTriangle(0, 4, 5)).toBe(false);
});

test('A, 4, 5 is not right triangle', () => {
    expect(isRightTriangle('A', 4, 5)).toBe(false);
});

test('10000005, 4, 5 is not right triangle', () => {
    expect(isRightTriangle(10000005, 4, 5)).toBe(false);
});

/*short test example*/
test('6.5, 4, 5 is not right triangle', () => {
    expect(isRightTriangle(6.5, 4, 5)).toBe(false);
});

/*detailed test example*/
test('6.5, 4, 5 is not right triangle', () => {
    let a = 6.5;
    let b = 4;
    let c = 5;

    let result = isRightTriangle(a,b,c);

    expect(result).toBe(false);
});
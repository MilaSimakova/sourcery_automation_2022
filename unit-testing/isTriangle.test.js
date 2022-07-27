const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
    expect(isTriangle(3, 5, 4)).toBe(true);
    expect(isTriangle(4, 3, 5)).toBe(true);
    expect(isTriangle(4, 5, 3)).toBe(true);
    expect(isTriangle(5, 4, 3)).toBe(true);
    expect(isTriangle(5, 3, 4)).toBe(true);
});

test('-4, 5, 6 is not triangle', () => {
    expect(isTriangle(-4, 5, 6)).toBe(false);
});

test('0, 4, 5 is not triangle', () => {
    expect(isTriangle(0, 4, 5)).toBe(false);
});

test('A, 4, 5 is not triangle', () => {
    expect(isTriangle('A', 4, 5)).toBe(false);
});

test('10000005, 4, 5 is not triangle', () => {
    expect(isTriangle(10000005, 4, 5)).toBe(false);
    expect(isTriangle(4, 10000005, 5)).toBe(false);
    expect(isTriangle(5, 4, 10000005)).toBe(false);
});

test('6.5, 4, 5 is triangle', () => {
    expect(isTriangle(6.5, 4, 5)).toBe(true);
});

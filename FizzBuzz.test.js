const fizzBuzz=require('./fizzBuzz')
test('3,5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});
test('5', () => {
    expect(fizzBuzz(10)).toBe("Buzz");
});
test('3', () => {
    expect(fizzBuzz(9)).toBe("Fizz");
});
test('num', () => {
    expect(fizzBuzz(7)).toBe("7");
});
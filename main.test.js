import { capitalize, reverseString, Calculator } from './main.js';

it('Capitalizes the first letter in in a string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});

it('Reverses a string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('hello')).toBe('olleh');
})

it('Performs add, subtract, divide, and multiply' ,() => {
    expect(Calculator.add(4, 3)).toBe(7);
    expect(Calculator.divide(12, 4)).toBe(3);
    expect(Calculator.subtract(4, 3)).toBe(1);
    expect(Calculator.multiply(5, 3)).toBe(15);
});
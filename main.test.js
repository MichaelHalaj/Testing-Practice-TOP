import { capitalize, reverseString, Calculator, caesarCiper } from './main.js';

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

it('Shifts a string by a shift factor', () => {
    expect(caesarCiper('hello world.', 5)).toBe('mjqqt btwqi.');
    expect(caesarCiper('zxcxjskdal. adsd zxc. czx*31 34', 25)).toBe('ywbwirjczk. zcrc ywb. byw*31 34');
});
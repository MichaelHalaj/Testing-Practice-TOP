import { capitalize, reverseString, Calculator, caesarCipher, analyzeArray } from './main.js';

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
    expect(caesarCipher('hello world.', 5)).toBe('mjqqt btwqi.');
    expect(caesarCipher('zxcxjskdal. adsd zxc. czx*31 34', 25)).toBe('ywbwirjczk. zcrc ywb. byw*31 34');
    expect(caesarCipher('ZHSKWEIO28djsz', 7)).toBe('GOZRDLPV28kqzg');
});

it('Contains average, min, max, and length', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
});
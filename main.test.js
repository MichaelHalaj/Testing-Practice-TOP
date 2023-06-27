import { capitalize, reverseString } from './main.js';

it('Capitalizes the first letter in in a string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});

it('Reverses a string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('hello')).toBe('olleh');
})
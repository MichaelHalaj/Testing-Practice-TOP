import { capitalize } from './main.js';

it('Capitalizes the first letter in in a string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});
const createPassword = require('../lib/createPassword')
test('generate password of default length', () => {
    const password = createPassword()
    expect(password).toHaveLength(12);
});

test('generates a password of specified length', () => {
    const password = createPassword(16);
    expect(password).toHaveLength(16);
});

test('throws an error if no character types are selected', () => {
    expect(() => createPassword(12, { numbers: false, symbols: false, uppercase: false, lowercase: false }))
        .toThrow('At least one character type should be selected');
});
# password-gen-tool

This is a simple password generator tool.
## Installation

```sh
npm install password-gen-tool
```

## Usage

```sh
const { generatePassword } = require('random-password-generator');

// Generate a password with default length (12 characters) and options
console.log(generatePassword());

// Generate a password with specified length (16 characters) and options
console.log(generatePassword(16, { numbers: true, symbols: false, uppercase: true, lowercase: true }));
```

function createPassword(length = 12, options = {}) {
    const {
        numbers = true,
        symbols = true,
        uppercase = true,
        lowercase = true
    } = options
    const numChars = '0123456789'
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    let symbol = ''
    if(numbers) symbol += numChars
    if(symbols) symbol += symbolChars
    if(uppercase) symbol += uppercaseChars
    if(lowercase) symbol += lowercaseChars
    if(symbol.length === 0) throw new Error("At least one character type should be selected")
    let password = ''
    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * symbol.length);
        password += symbol[randomIndex];
    }
    return password
}
export default createPassword;
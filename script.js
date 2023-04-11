const generateBtn = document.getElementById('generate')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const passwordEl = document.getElementById('password')

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'

generateBtn.addEventListener('click', function(){
    const len = +lengthEl.value;
    const hasUppercase = uppercaseEl.checked
    const hasNumbers = numbersEl.checked
    const hasSymbols = symbolsEl.checked

    passwordEl.value = generatePassword(len, hasUppercase, hasNumbers, hasSymbols);
})

function generatePassword(len, hasUppercase, hasNumbers, hasSymbols){
    let char = 'abcdefghijklmnopqrstuvwxyz'

    if(hasUppercase) char += upperCase;
    if(hasNumbers) char += numbers;
    if(hasSymbols) char += symbols;

    let password = '';

    for(let i = 0; i < len; i++){
        password += char[Math.floor(Math.random()*char.length)]
    }

    return password;
}
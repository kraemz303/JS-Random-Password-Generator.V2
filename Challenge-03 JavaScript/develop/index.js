var specialChar = [
    '!', 
    '#', 
    '$', 
    '%', 
    '&', 
    "'", 
    '(', 
    ')', 
    '*', 
    '+', 
    ',', 
    '-',
    '.',
    '/',
    ':',
    ';',
    '<',
    '=',
    '>',
    '?',
    '@',
    '[',
    ']',
    '^',
    '_',
    '`',
    '{',
    '|',
    '}',
    '~', 
  ];
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Assignment Code

function generatePassword(){
    var passwordLength = prompt('How many characters would you like your password to be?');
    var includeSpecialChar = confirm('Would you like to include Special Characters?');
    var includeNumChar = confirm('Would you like to include Numerical Characters?');
    var includeUpperCaseChar = confirm('Would you like to include Upper Case Characters?');
    var includeLowerCaseChar = confirm('Would you like to include Lower Case Characters?');

    var options = {
        passwordLength: passwordLength,
        includeSpecialChar: includeSpecialChar,
        includeNumChar: includeNumChar,
        includeUpperCaseChar: includeUpperCaseChar,
        includeLowerCaseChar: includeLowerCaseChar,

    }

    var possiblePasswordChars = [];
    var password = [];

function selectRandomChar (array){
    var randomNum = Math.floor(math.random() * array.length);
    return array[randomNum];
}
    //generate a random special character
    //then push it to the password
 if (options.includeSpecialChar){
        possiblePasswordChars = possiblePasswordChars.concat (specialChar);
        password.push(selectRandomChar(specialChar));

}if (options.includeNumChar){
        possiblePasswordChars = possiblePasswordChars.concat (numericChar);
        password.push(selectRandomChar(numericChar));

} if (options.includeUpperCaseChar){
        possiblePasswordChars = possiblePasswordChars.concat (upperCaseChar);
        password.push(selectRandomChar(upperCaseChar));

} if (options.includeLowerCaseChar){
        possiblePasswordChars = possiblePasswordChars.concat (lowerCaseChar);
        password.push(selectRandomChar(lowerCaseChar));
    }

var remainingChar = options.length - password.length;

for (var i = 0; i < remainingChar; i++)
    var randonChar = selectRandomChar(possiblePasswordChars);
    password.push(randonChar);
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

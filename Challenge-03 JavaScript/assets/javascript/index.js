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
//initiates prompt for pw length input then boolean confirm for special chars, num chars, upper case chars, and lower case chars
//while loop added to ensure parameters for user input
function generatePassword(){
    var passwordLength = prompt('How many characters would you like your password to be?');
    while(parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128 || parseInt(passwordLength) == " " || isNaN(parseInt(passwordLength))){
        passwordLength = prompt("Please enter a number between 8 and 128");
    }
    var includeSpecialChar = confirm('Would you like to include Special Characters?');
    var includeNumChar = confirm('Would you like to include Numerical Characters?');
    var includeUpperCaseChar = confirm('Would you like to include Upper Case Characters?');
    var includeLowerCaseChar = confirm('Would you like to include Lower Case Characters?');

//user must select true for 1 or more chars indicated in the 'if' statement
    if (includeSpecialChar === false && includeNumChar === false && includeUpperCaseChar === false && includeLowerCaseChar === false){
         alert("password must include one type of character");
         window.location.reload();
     }

 //this guarantees the password length and char input will be, else will read as undefined
 //'if' statement above shows text alert instead of 'undefined'    
    var options = {
        passwordLength: passwordLength,
        includeSpecialChar: includeSpecialChar,
        includeNumChar: includeNumChar,
        includeUpperCaseChar: includeUpperCaseChar,
        includeLowerCaseChar: includeLowerCaseChar,
    }

//empty stings to store possible characters and random password
    var possiblePasswordChars = [];
    var password = [];

//if any of the chars are selected as true for the user, store char in possiblePasswordChars   
 if (options.includeSpecialChar){
        possiblePasswordChars = possiblePasswordChars.concat (specialChar);
        
}if (options.includeNumChar){
        possiblePasswordChars = possiblePasswordChars.concat (numericChar);
       
} if (options.includeUpperCaseChar){
        possiblePasswordChars = possiblePasswordChars.concat (upperCaseChar);
        
} if (options.includeLowerCaseChar){
        possiblePasswordChars = possiblePasswordChars.concat (lowerCaseChar);
    
    }
//converts a string into a integer and get data from return password string
var remainingChar = parseInt(passwordLength);

//estab. new variable in for loop and applied math logic to generate password
//math logic in loop generates random characters to return password
for (var i = 0, n = possiblePasswordChars.length; i < remainingChar; i++){
   password += possiblePasswordChars [Math.floor(Math.random() * n)]
    }
    return password;
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

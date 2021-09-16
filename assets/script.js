// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

function generatePassword() {
  var passwordLength;
  while (passwordLength = prompt("Desired Password Length: ")) {
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password must be between 8 and 128 characters.");
    } else if (isNaN(passwordLength)) {
      alert('Password length must be a number.')
    } else {
      passwordLength = parseInt(passwordLength);   
      break;
    }
  }
  
  var includeUppercase = prompt('Would you like to include numbers, Y/N?');
  if (includeUppercase.toLowerCase().trim() == 'y' || includeUppercase.toLowerCase().trim() == 'yes') {
    includeUppercase = 1;
  } else { 
    includeUppercase = 0
  }
  
  var includeNumbers = prompt('Would you like to include numbers, Y/N?');
  if (includeNumbers.toLowerCase().trim() == 'y' || includeNumbers.toLowerCase().trim() == 'yes') {
    includeNumbers = 1;
  } else { 
    includeNumbers = 0
  }
  
  var includeSpecialCharacters = prompt('Would you like to include special characters, Y/N?');
  if (includeSpecialCharacters.toLowerCase().trim() == 'y' || includeSpecialCharacters.toLowerCase().trim() == 'yes') {
    includeSpecialCharacters = 1;
  } else { 
    includeSpecialCharacters = 0
  }
  
  var generatedPassword = '';
  var passwordCharacters = 'abcdefghijklmnopqrstuvwxyz';
  if (includeUppercase) {
    passwordCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (includeNumbers) {
    passwordCharacters += '0123456789';
  }
  if (includeSpecialCharacters) {
    passwordCharacters += '@!#$%^&*';
  }
  
  for (i = 0; i <= passwordLength; i++) {
    let randomChar = Math.floor(Math.random() * passwordCharacters.length) + 1;
    generatedPassword += passwordCharacters.charAt(randomChar);
  }
  
  return generatedPassword; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'", "<", ",", ".", ">", "/", "?"];

function generatePassword() {

  var passwordLength = prompt("How many characters would you like your password to be? Password must contain between 8-128 characters.")

  if (!passwordLength) {
    alert("Please enter value");
    return;
    } 
    else if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a value between 8-128 characters.");
      return;
    }
    else {
      var confirmNumbers = confirm("Would you like numbers in your password?");
      var confirmLowerCase = confirm("Would you like lower case letters in your password?");
      var confirmUpperCase = confirm("Would you like upper case letters in your password?");
      var confirmSpecialCharacters = confirm("Would you like special characters in your password?");
    
    if (!confirmNumbers && !confirmLowerCase && !confirmUpperCase && !confirmSpecialCharacters) {
      alert("Please try again. Must confirm at least one criteria.");
    }
    else {
      var allCharacters= [];
      if (confirmNumbers) allCharacters = allCharacters.concat(numbers);
      if (confirmLowerCase) allCharacters = allCharacters.concat(lowerCase);
      if (confirmUpperCase) allCharacters = allCharacters.concat(upperCase);
      if (confirmSpecialCharacters) allCharacters = allCharacters.concat(specialCharacters);

      var password = " "
      for (var i = 0; i <= passwordLength; i++) {
        var randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)]
        password = password + randomCharacter
      }
      
    } return password;
  }
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Defining generatePassword 
function generatePassword () {
  var password = ""; 

  password += "A";
  password += "n";

  return password;
}

console.log (generatePassword ());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

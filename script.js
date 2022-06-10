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
  // prompt for the length of the password 

  //ask for character types 

  // lowercase 

  // uppercase 
  
  // numeric 

  // special charactor 


  return password;
}

console.log (generatePassword ());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

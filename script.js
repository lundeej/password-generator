// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Upper case letters
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//Lower case letters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

// Numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Special Characters 
var specialcharcters = ["!", "@", "#", "$", "%", "^", "&", "*,"]; 

//generate password
function generatePassword(){

  // Prompt to chose the password length and store in a variable 
  var length = prompt("Enter the length of the password"); 
  // validate the password length, by verify that it is between 8 and 128 

  // Prompt user if they want uppercase and store in a variable 

  // Prompt user if they want lowercase and store in a variable 

  // Prompt user if they want numbers and store in a variable 

  // Prompt user if they want special characters and store in a variable 

}

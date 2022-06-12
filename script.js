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

  var passwordset - [];

  var confirmuppercase;
  var confirmlowercase;
  var confirmnumbers;
  var confirmspecialcharcters;

  // Prompt to chose the password length and store in a variable 
  length = prompt("Enter the length of the password"); 
  // validate the password length, by verify that it is between 8 and 128 
  if (length < 8 || length > 129 ){
    alert("Password length must be between 8 and 128 characters");
    return; 
  } else {
      // Prompt user if they want uppercase and store in a variable 
      confirmuppercase = confirm("Do you want to include Uppercase letters?")

      // Prompt user if they want lowercase and store in a variable 
      confirmlowercase = confirm("Do you want to include lowercase letters?")

      // Prompt user if they want numbers and store in a variable 
      confirmnumbers = confirm("Do you want to include numbers?")

      // Prompt user if they want special characters and store in a variable
      confirmspecialcharcters = confirm("Do you want to include special characters?")
  }  if (confirmuppercase || confirmlowercase || confirmnumbers || confirmspecialcharcters){
        if (confirmuppercase){
          passwordset - passwordset.concast(uppercase);
        }
      }

  for (var i = 0; i < length.length; i++){
   
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = Number
  
  passwordText.value = password;
  
}
// prompt for the length of the password 

//ask for character types 

// lowercase 

// uppercase 

// numeric 

// special charactor 

// function to get lowercase 
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

// function to get uppercase 
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}

// function to get number 
function getRandomNumber() {
 return String.fromCharCode(Math.floor(Math.random() * 10) +48);
}

// function to get symbol 
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>?,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Defining generatePassword 
function generatePassword () {

  return password;
}

console.log (generatePassword ());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

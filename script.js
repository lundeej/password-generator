// Assignment Code
var generateBtn = document.querySelector("#generate");

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

// "choices" declared outside the if statement so they can be concatenated upon condition 
var choices; 

//generate password
function generatePassword(){
  //Empty array to store the characters the USER wants to use. 
  var choosencharacters = [];
  
  //Empty string to store password characters 
  var passwordstring = "";

  // Variables for selected characters to include in the password 
  var confirmuppercase;
  var confirmlowercase;
  var confirmnumbers;
  var confirmspecialcharcters;
  
  // Prompt to chose the password length and store in a variable 
  var passwordlength = prompt("Enter the length of the password"); 
  
  // if the 'passwordlength" is less than 8 and greater than 128; 
  if (passwordlength < 8 || length > 129 ){
    alert("Password length must be between 8 and 128 characters");
    return ""; 
  }  
  
  else {
    // Prompt user if they want uppercase and store in a variable 
    if(confirmuppercase = confirm("Click 'OK' if you want to include Uppercase letters?")){
      Array.prototype.push.apply(choosencharacters, uppercase);
    }
    
    // Prompt user if they want lowercase and store in a variable 
    if(confirmlowercase = confirm("Click 'OK' if you want to include lowercase letters?")){
      Array.prototype.push.apply(choosencharacters, lowercase);
    }
    
    // Prompt user if they want numbers and store in a variable 
    if(confirmnumbers = confirm("Click 'OK' if you want to include numbers?")){
      Array.prototype.push.apply(choosencharacters, numbers);
    }
    
    // Prompt user if they want special characters and store in a variable
    if(confirmspecialcharcters = confirm("Click 'OK' if you want to include special characters?")){
      Array.prototype.push.apply(choosencharacters, specialcharcters);
    }
    // if all 4 options are negative 
    if (!confirmuppercase && !confirmlowercase && !confirmnumbers && !confirmspecialcharcters){
      alert("You must choose at least one: Uppercase, lowercase, Number or Special Characters to be included in the password!");
      return ""; 
    }
    // Run loop to get password generated 
    else {
      for (var i = 0; i < passwordlength; i++){
        var random = Math.floor(Math.random() * choosencharacters.length);
        passwordstring += choosencharacters[random];
      }
      console.log(passwordstring);
      return (passwordstring);
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}
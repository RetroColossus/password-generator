// Assignment code here
function generatePassword(){
 
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
var randomPassword = upperCase[Math.floor(Math.random() * upperCase.length)]
 
return randomPassword
}

//generatePassword()

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //generatePassword = 7;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
function generatePassword(){
  var userInput = window.prompt("How many characters between 8-128?");
  var randomAllPw = "";
  var  randomAll= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";
  
    if (userInput < 8 || userInput > 128){
      randomAll = window.alert("try again");
    }

  for (var i = 0; i < userInput; i++)
    randomAllPw += randomAll.charAt(Math.floor(Math.random() * randomAll.length));

  return randomAllPw;
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

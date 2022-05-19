// Assignment code here
function generatePassword(){
  var userInput1 = window.prompt("please choose password length between 8-128");
  var userInput2 = window.prompt("Would you like special characters?");
  var randomAllPw = "";
  var randomAll= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";
  var specialCharUpperCase = "!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharLowerCase = "!@#$%^&*abcdefghijklmnopqrstuvwxyz";

    if (userInput1 < 8 || userInput1 > 128){
      randomAll = window.alert("try again");
    } else if (userInput1 > 8 || userInput1 < 8) {
      for (var i = 0; i < userInput1; i++)
    randomAllPw += randomAll.charAt(Math.floor(Math.random() * randomAll.length));
    } else if (userInput2 === "yes" || userInput2 === Yes) {
      for (var i = 0; i < userInput2; i++)
    randomAllPw += randomAll.charAt(Math.floor(Math.random() * randomAll.length));
    }

  for (var i = 0; i < userInput1; i++)
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

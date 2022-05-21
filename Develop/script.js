// Assignment code here
var letterSymbols = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "1234567890",
  specialCharacters: "!@#$%^&*"
  }
function generatePassword(){
  var userInput1 = window.prompt("please choose a password length between 8-128 characters");
  var charSym = "";
  var password = "";
  
  //var upperCase = confirm("Do you want to use uppercase letters?");
  //var lowerCase = confirm("Do you want to use lowercase letters?");
  //var numbers = confirm("Do you want to use numbers?");
  //var specialCharacters = confirm("Do you want to use special characters?");


  
  if (userInput1 >= 8 && userInput1 <= 128){
    upperCase = confirm("Do you want to use uppercase letters?");
    lowerCase = confirm("Do you want to use lowercase letters?");
    numbers = confirm("Do you want to use numbers?");
    specialCharacters = confirm("Do you want to use special characters?");
   
    //for (var i = 0; i < userInput1; i++)
        //randomAllPw += randomAll.charAt(Math.floor(Math.random() * randomAll.length));
    if (upperCase === false && lowerCase === false && numbers === false && specialCharacters === false){
    alert("Please select one");
      password = "No Dice!";
      return password;
    } 
    
    if (upperCase){
      charSym += letterSymbols.upperCase;
    }
    if (lowerCase){
      charSym += letterSymbols.lowerCase;
    }
    if (numbers){
      charSym += letterSymbols.numbers;
    }
    if (specialCharacters){
      charSym += letterSymbols.specialCharacters;
    }
  
  for (let i = 0; i < userInput1; i++) {
     password += charSym[Math.floor(Math.random() * charSym.length)]
     
  }
 return password;
}
else if (userInput1 < 8 || userInput1 > 128) {
  window.alert("please try again")
  password = "I'm a crazy chicken! Try again :)";
      return password;
  
}

}

    //if (specialCharacters === true){
       //for (var i = 0; i < userInput1; i++)
       //randomAllPw += specialChar.charAt(Math.floor(Math.random() * specialChar.length));
       //return randomAllPw;
      //}
      //if (upperCase === true && lowerCase === true && numbers === true && specialCharacters === true){
        //for (var i = 0; i < userInput1; i++)
        //randomAllPw += randomAll.charAt(Math.floor(Math.random() * randomAll.length));
        //return randomAllPw
        //} 
       


 //for (var i = 0; i < userInput1; i++)
  //randomAllPw += randomAll.charAt(Math.floor(Math.random() * randomAll.length));



  //var userInput1 = confirm("please choose password length betweenl 8-128");
  //var userInput2 = confirm("Would you like special characters?");
  

  //for (var i = 0; i < userInput1; i++)
  //randomAllPw += randomAll.charAt(Math.floor(Math.random() * randomAll.length));

//return randomAllPw;
      
    





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

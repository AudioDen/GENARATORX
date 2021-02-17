// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var characterLength = prompt("How long do you want your password to be? (8-128 characters)")

  while(characterLength < 8 || characterLength > 128){
    characterLength = prompt("you broke the rules, character length MUST be between 8 and 128")
  } 

  var lowercaseCheck = confirm("Do you want to include lowercase characters?")
  var uppercaseCheck = confirm("Do you want to include uppercase characters?")
  var numberCheck = confirm("Do you want to include number characters?")
  var specialCheck = confirm("Do you want to include special characters?")

  var lowercaseArr = ["a","b"]
  var uppercaseArr = ["A","B"]
  var numberArr = ["1","2"]
  var specialArr = ["$","#"]

  var optionArr = [];

  if(lowercaseCheck == true){
    // console.log(lowercaseArr)
    optionArr = optionArr.concat(lowercaseArr)
  }
  if (uppercaseCheck == true){
    // console.log(uppercaseArr)
    optionArr = optionArr.concat(uppercaseArr)
  }
  if(numberCheck == true){
    console.log(numberArr)
  }
  if(specialCheck == true){
    console.log(specialArr)
  }

  console.log(optionArr)
  // while(1){
  //   console.log("oh no!")
  // }

  // alert("Hey!")
  var randomPass = "";
  for(i=0; i<characterLength; i++){
    var randomIndex = Math.floor(Math.random() * optionArr.length)
    randomPass += optionArr[randomIndex]
  }

  return randomPass
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

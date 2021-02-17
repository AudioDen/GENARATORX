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
  var scoreDash = confirm("Do you want underscore and dash?")


  var lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var numberArr = ["1","2","3","4","5","6","7","8","9","0"]
  var specialArr = ["!","@","#","$","%","^","&","*","(",")","<",">","?","|","{","}","[","]",]
  var scoreDashArr = ["_","-"]

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
    //console.log(numberArr)
    optionArr = optionArr.concat(numberArr)
  }
  if(specialCheck == true){
    //console.log(specialArr)
    optionArr = optionArr.concat(specialArr)
  }
  if(scoreDash == true){
    //console.log(specialArr)
    optionArr = optionArr.concat(scoreDashArr)
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

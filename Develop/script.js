// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1,2,3,4,5,6,7,8,9,0]
var spChars = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":","\"","\\"]
var upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var pswrd = [];
var finalPswrd = [];

function generatePassword() {
  var letter = confirm("Do you want to use lower case letters?")
  var number = confirm("Do you want to use numbers?")
  var spChar = confirm("Do you want to use letters?")
  var upLetter = confirm("Do you want to use upper case letters?")
  var num = prompt("How long do you want your password. This must be 8 to 128 character.")
  while (num < 8 || num > 128){
    num = prompt("Please select a number form 8 to 128")
  }
  if(letter){
    pswrd = pswrd.concat(letters);
  }
  if(number){
    pswrd = pswrd.concat(numbers);
  }
  if(spChar){
    pswrd = pswrd.concat(spChars);
  }
  if(upLetter) {
    pswrd = pswrd.concat(upLetters);
  }
  for (var i=0; i<num; i++){
    var idx = Math.floor(Math.random() * pswrd.length);
    finalPswrd.push(pswrd[idx]);
  }
  // alert("This is your Password: " +finalPswrd.join(""));
  return finalPswrd.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

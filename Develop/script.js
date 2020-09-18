// INPUT VARIABLES
var passLength;
var lowConfirm;
var upConfirm;
var numConfirm;
var spConfirm;

// VARIABLE VALUES

// Letters
alphaL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alphaU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Numbers
num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Special Chars
spChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "?", "~", "<", ">", "=", "+", "{", "}", "|"];

// Answers to prompts
var answers;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Generate Password Function starts here
function generatePassword(){
  //begin input prompts
  passLength = parseInt(prompt("How many characters does your password need? Please choose between 8 and 128 characters."));
  
  if (!passLength) {
    alert("Please enter a number between 8 and 128.");
  }
  else if (passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt("Please enter a number between 8 and 128"));
  }
  else {
    lowConfirm = confirm("Would you like to include lower-case letters?");
    upConfirm = confirm("Would you like to include upper-case letters?");
    numConfirm = confirm("Would you like to include numbers?")
    spConfirm = confirm("Would you like to include special characters")
  };

  // If nothing was chosen
  if (!lowConfirm && !upConfirm && !numConfirm && !spConfirm) {
    answers = alert("Please choose at least one option!")
  }

  

  // Proceedure for all 4 inputs
  else if (lowConfirm && upConfirm && numConfirm && spConfirm) {
    answers = alphaL.concat(alphaU, num, spChar)
  }

  // Proceedure for three inputs
  else if (lowConfirm && upConfirm && numConfirm) {
    answers = alphaL.concat(alphaU, num);
  }
  else if (lowConfirm && upConfirm && spConfirm) {
    answers = alphaL.concat(alphaU, spConfirm);
  }
  else if (lowConfirm && numConfirm && spConfirm) {
    answers = alphaL.concat(num, spChar);
  }
  else if (upConfirm && numConfirm && spConfirm) {
    answers = alphaU.concat(num, spChar);
  }
  
  // Proceedure for two inputs
  else if (lowConfirm && upConfirm) {
    answers = alphaL.concat(alphaU);
  }
  else if (lowConfirm && numConfirm) {
    answers = alphaL.concat(num);
  }
  else if (lowConfirm && spConfirm) {
    answers = alphaL.concat(spChar);
  }
  else if (upConfirm && numConfirm) {
    answers = alphaU.concat(num);
  }
  else if (upConfirm && spConfirm) {
    answers = alphaU.concat(spChar);
  }
  else if (numConfirm && spConfirm) {
    answers = num.concat(spChar);
  }
  
  // Proceedure for single input
  else if (lowConfirm) {
    answers = alphaL;
  }
  else if (upConfirm) {
    answers = alphaU;
  }
  else if (numConfirm) {
    answers = num;
  }
  else if (spConfirm) {
    answers = spChar;
  };

  var password = [];

  for (var i = 0; i < passLength; i++) {
    var picker = answers[Math.floor(Math.random() * answers.length)];
    password.push(picker);
  }

  var passwordText = password.join("");
  debugger;
  writePassword(passwordText);
  return passwordText;
}


// Write password to the #password input
function writePassword(passwordText) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



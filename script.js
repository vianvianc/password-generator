var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specChar = "!@#$%^&*?~";
var lowerUpperNumSpec =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*?~";
var lowerUpperNum =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var upperNumSpec = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*?~";
var lowerUpperSpec =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?~";
var lowerNumSpec = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*?~";
var lowerUpper = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerNum = "abcdefghijklmnopqrstuvwxyz1234567890";
var lowerSpec = "abcdefghijklmnopqrstuvwxyz!@#$%^&*?~";
var upperNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var upperSpec = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?~";
var numSpec = "1234567890!@#$%^&*?~";
var password = "";
//----------------------------------------------------------------------------
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return password;
}
//------------------------------------------------------------------------
// function generate(click, )
var lengthPrompt = prompt(
  "Enter password Length. Password length must be between 8 ad 128 characters."
);
checkLength();
var lowercasePrompt = confirm("Do you want lowercase in your password?");
selectLower();
// generatedLow();
var uppercasePrompt = confirm("Do you want uppercase in your password?");
selectUpper();
// generatedUp();
var numberPrompt = confirm("Do you want numbers in your password?");
selectNumbers();
// generatedNum();
var specCharPrompt = confirm(
  "Do you want special characters in your password?"
);
selectSpecials();
// generatedSpec();

generatedPassword();
//-----------------------------------------------------------------------
function checkLength() {
  if (lengthPrompt >= 8 && lengthPrompt <= 128) {
    console.log(lengthPrompt);
    // } else if (lengthPrompt === null || lengthPrompt === NaN) {
    //   console.log("You must enter a number.");
  } else if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert("You must enter a value between 8 and 128.");
    window.location.reload();
  }
}
//-----------------------------------------------------------------------
function selectLower() {
  if (lowercasePrompt === true) {
    console.log("lowercase selected");
  } else console.log("no lowercase");
}
function selectUpper() {
  if (uppercasePrompt === true) {
    console.log("uppercase selected");
  } else console.log("no uppercase");
}
function selectNumbers() {
  if (numberPrompt === true) {
    console.log("numbers selected");
  } else console.log("no numbers");
}
function selectSpecials() {
  if (specCharPrompt === true) {
    console.log("special characters selected");
  } else console.log("no special characters");
}
//-----------------------------------------------------------------------
function generatedPassword() {
  if (
    lowercasePrompt === true &&
    uppercasePrompt === true &&
    numberPrompt === true &&
    specCharPrompt === true
  ) {
    generatedLowerUpperNumSpec();
  } else if (
    lowercasePrompt === true &&
    uppercasePrompt === true &&
    numberPrompt === true &&
    specCharPrompt !== true
  ) {
    generatedLowerUpperNum();
  } else if (
    lowercasePrompt === true &&
    uppercasePrompt === true &&
    numberPrompt !== true &&
    specCharPrompt === true
  ) {
    generatedLowerUpperSpec();
  } else if (
    lowercasePrompt === true &&
    uppercasePrompt !== true &&
    numberPrompt === true &&
    specCharPrompt === true
  ) {
    generatedLowerNumSpec();
  } else if (
    lowercasePrompt !== true &&
    uppercasePrompt === true &&
    numberPrompt === true &&
    specCharPrompt == true
  ) {
    generatedUpperNumSpec();
  } else if (
    lowercasePrompt !== true &&
    uppercasePrompt !== true &&
    numberPrompt === true &&
    specCharPrompt === true
  ) {
    generatedNumSpec();
  } else if (
    lowercasePrompt !== true &&
    uppercasePrompt === true &&
    numberPrompt !== true &&
    specCharPrompt === true
  ) {
    generatedUpperSpec();
  } else if (
    lowercasePrompt !== true &&
    uppercasePrompt === true &&
    numberPrompt === true &&
    specCharPrompt !== true
  ) {
    generatedUpperNum();
  } else if (
    lowercasePrompt !== true &&
    uppercasePrompt !== true &&
    numberPrompt !== true &&
    specCharPrompt === true
  ) {
    generatedSpec();
  } else if (
    lowercasePrompt !== true &&
    uppercasePrompt === true &&
    numberPrompt !== true &&
    specCharPrompt !== true
  ) {
    generatedUp();
  } else if (
    lowercasePrompt === true &&
    uppercasePrompt !== true &&
    numberPrompt !== true &&
    specCharPrompt === true
  ) {
    generatedLowerSpec();
  } else if (
    lowercasePrompt === true &&
    uppercasePrompt !== true &&
    numberPrompt === true &&
    specCharPrompt === true
  ) {
    generatedLowerNumberSpec();
  } else if (
    lowercasePrompt === true &&
    uppercasePrompt === true &&
    numberPrompt !== true &&
    specCharPrompt === true
  ) {
    generatedLowerUpperSpec();
  } else if (
    lowercasePrompt !== true &&
    uppercasePrompt !== true &&
    numberPrompt === true &&
    specCharPrompt !== true
  ) {
    generatedNum();
  } else if (
    lowercasePrompt === true &&
    uppercasePrompt !== true &&
    numberPrompt !== true &&
    specCharPrompt !== true
  ) {
    generatedLow();
  } else if (
    lowercasePrompt === true &&
    uppercasePrompt === true &&
    numberPrompt !== true &&
    specCharPrompt !== true
  ) {
    generatedLowerUpper();
  } else if (
    lowercasePrompt === true &&
    uppercasePrompt !== true &&
    numberPrompt === true &&
    specCharPrompt !== true
  ) {
    generatedLowerNum();
  } else if (
    lowercasePrompt !== true &&
    uppercasePrompt !== true &&
    numberPrompt !== true &&
    specCharPrompt !== true
  ) {
    alert("You have to select at least one password criteria.");
  }
}
//-----------------------------------------------------------------------
function generatedLow() {
  for (var i = 0; i <= lengthPrompt; i++) {
    var randomLow = Math.floor(Math.random() * lowercase.length);
    password += lowercase.substring(randomLow, randomLow + 1);
    console.log(password);
  }
}
function generatedLowerNum() {
  for (var i = 0; i <= lengthPrompt; i++) {
    var randomLowNum = Math.floor(Math.random() * lowerNum.length);
    password += lowerNum.substring(randomLowNum, randomLowNum + 1);
    console.log(password);
  }
}
function generatedUp() {
  for (var i = 0; i <= lengthPrompt; i++) {
    var randomUp = Math.floor(Math.random() * uppercase.length);
    password += uppercase.substring(randomUp, randomUp + 1);
    console.log(password);
  }
}
function generatedNum() {
  for (var i = 0; i <= lengthPrompt; i++) {
    var randomNum = Math.floor(Math.random() * numbers.length);
    password += numbers.substring(randomNum, randomNum + 1);
    console.log(password);
  }
}
function generatedSpec() {
  for (var i = 0; i <= lengthPrompt; i++) {
    var randomSpec = Math.floor(Math.random() * specChar.length);
    password += specChar.substring(randomSpec, randomSpec + 1);
    console.log(password);
  }
}
function generatedLowerUpper() {
  for (var i = 0; i <= lengthPrompt; i++) {
    var randomLowerUpper = Math.floor(Math.random() * lowerUpper.length);
    password += lowerUpper.substring(randomLowerUpper, randomLowerUpper + 1);
    console.log(password);
  }
}
function generatedLowerNumbers() {
  for (var i = 0; i <= lengthPrompt; i++) {
    var randomLowerNumbers = Math.floor(Math.random() * lowerNum.length);
    password += lowerNum.substring(randomLowerNumbers, randomLowerNumbers + 1);
    console.log(password);
  }
}
function generatedLowerSpecial() {
  for (var i = 0; i <= lengthPrompt; i++) {
    var randomLowerSpec = Math.floor(Math.random() * lowerSpec.length);
    password += lowerSpec.substring(randomLowerSpec, randomLowerSpec + 1);
    console.log(password);
  }
}
function generatedUpperSpec() {
  for (var i = 0; i <= lengthPrompt; i++) {
    var randomUpperSpec = Math.floor(Math.random() * upperSpec.length);
    password += upperSpec.substring(randomUpperSpec, randomUpperSpec + 1);
    console.log(password);
  }
}
function generatedUpperNum() {
  for (var i = 0; i <= lengthPrompt; i++) {
    var randomUpperNum = Math.floor(Math.random() * upperNum.length);
    password += upperNum.substring(randomUpperNum, randomUpperNum + 1);
    console.log(password);
  }
}
function generatedNumSpec() {
  for (var i = 0; i <= lengthPrompt; i++) {
    var randomNumSpec = Math.floor(Math.random() * numSpec.length);
    password += numSpec.substring(randomNumSpec, randomNumSpec + 1);
    console.log(password);
  }
}
function generatedLowerUpperNumSpec() {
  for (var i = 0; i <= lengthPrompt; i++) {
    var randomLowerUpperNumSpec = Math.floor(
      Math.random() * lowerUpperNumSpec.length
    );
    password += lowerUpperNumSpec.substring(
      randomLowerUpperNumSpec,
      randomLowerUpperNumSpec + 1
    );
    console.log(password);
  }
}
function generatedLowerUpperNum() {
  for (var i = 0; i <= lengthPrompt; i++) {
    var randomLowerUpperNum = Math.floor(Math.random() * lowerUpperNum.length);
    password += lowerUpperNum.substring(
      randomLowerUpperNum,
      randomLowerUpperNum + 1
    );
    console.log(password);
  }
}
function generatedLowerUpperSpec() {
  for (var i = 0; i <= lengthPrompt; i++) {
    var randomLowerUpperSpec = Math.floor(
      Math.random() * lowerUpperSpec.length
    );
    password += lowerUpperSpec.substring(
      randomLowerUpperSpec,
      randomLowerUpperSpec + 1
    );
    console.log(password);
  }
}
function generatedUpperNumSpec() {
  for (var i = 0; i <= lengthPrompt; i++) {
    var randomUpperNumSpec = Math.floor(Math.random() * upperNumSpec.length);
    password += upperNumSpec.substring(
      randomUpperNumSpec,
      randomUpperNumSpec + 1
    );
    console.log(password);
  }
}
function generatedLowerNumSpec() {
  for (var i = 0; i <= lengthPrompt; i++) {
    var randomLowerNumSpec = Math.floor(Math.random() * lowerNumSpec.length);
    password += lowerNumSpec.substring(
      randomLowerNumSpec,
      randomLowerNumSpec + 1
    );
    console.log(password);
  }
}

//---------------------------------------------------------------------

// Assignment code here

function random_int(min, max) {
  if(!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function get_random_char(list) {
  return list[random_int(0, list.length)] 
}

function generatePassword() {
  var password_length = parseInt(window.prompt("How long should the password be?"))

  if (isNaN(password_length)) {
    window.alert("That's not a number!")
    return
  }
  if (password_length < 8 || password_length > 128) {
    window.alert("Password length must be between 8 and 128 characters!")
    return
  }

  var numbers_included = window.confirm("Would you like to include numbers in your password?")
  var symbols_included = window.confirm("Would you like to include symbols in your password?")
  var lowercase_included = window.confirm("Would you like to include lowercase letters in your password?")
  var uppercase_included = window.confirm("Would you like to include uppercase letters in your password?")
  
  var numbers_list = ["0","1","2","3","4","5","6","7","8","9"]
  var symbol_list = ["!","@","#","$","%","^","&","*"]
  var lowercase_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var uppercase_list = []

  var options_checked = []



  for (var letter = 0; letter < lowercase_list.length; letter++) {
    uppercase_list[letter] = lowercase_list[letter].toUpperCase()
  }

  if(numbers_included === true) {
    options_checked.push(numbers_list)
  }
  if(symbols_included === true) {
    options_checked.push(symbol_list)
  }
  if(lowercase_included === true) {
    options_checked.push(lowercase_list)
  }
  if(uppercase_included === true) {
    options_checked.push(uppercase_list)
  }

  if(options_checked.length === 0) {
    options_checked.push(lowercase_list)
  }

  var generated_password = ""

  for (var char = 0; char < password_length; char++){
    var random_list = get_random_char(options_checked)
    var random_char = get_random_char(random_list)
    generated_password += random_char
  }
  return generated_password
}

// Get references to the #generate element (generate button)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button (click event for the button)
generateBtn.addEventListener("click", writePassword);

// 56:19 (https://www.youtube.com/watch?v=JheVaV6bPvE)

//Create arrays for uppercase, lowercase, numerals, special characters
var upperCase = ["A", "B", "C","D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
var lowerCase = String.prototype.toLowerCase.apply(upperCase).split(",");
var numerals = ["1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@", "#","$", "%","^","&","*"];

//prompt user to select length of password between 8 - 128 char
function getPasswordOptions()
{
  let passLength = parseInt(prompt("Enter a length between 8 - 128 characters"));
  if(isNaN(passLength)=== true) {
    alert('Password length must be provided as a number');
    return;
  }
    else if (passLength<8)
    {
      alert('The length you have entered is too low, please enter a number higher than 8');
      return;
    }
      else if (passLength>128)
      {
        alert('The length you have entered is too high, please enter a number lower than 128');
        return;
      }
    else
    {
      alert('The generated password length will be ' + passLength + ' long');
    }
    
    //Prompt user to enter password criteria (upper,lower,numerals,specialchar)
    
      window.alert('Select which password criterias will be used: lowercase, uppercase, numeric, and/or special characters')
      let lowerCasePrompt = prompt("Will you use lowerCase as an option? Y / N");
      let upperCasePrompt = prompt("Will you use upperCase as an option? Y / N");
      let numeralsPrompt = prompt("Will you use numerals as an option? Y / N");
      let specialCharPrompt = prompt("Will you use special characters as an option? Y / N");
    
  
  let userChoices = 
  {
  passwordLength: passLength,
  specialChar: specialCharPrompt,
  numericChar: numeralsPrompt,
  lowerCaseChar: lowerCasePrompt,
  upperCaseChar: upperCasePrompt
  }
    {
    return userChoices;
    }
  
}


//generate password based on selected criteria
function getRandom(arr) 
  {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement;
  }

 //create two arrays, 1 for all options, 2 for result set 
  function possibleOptions()
  {
    let options = getPasswordOptions(); 
    var resultArray = [];
    var possibleChar = [];
    
    if (options.upperCaseChar === "Y") 
      {
        possibleChar = possibleChar.concat(upperCase)
      }

    if (options.lowerCaseChar === "Y") 
      {
        possibleChar = possibleChar.concat(lowerCase)
      }

    if (options.numericChar === "Y") 
      {
        possibleChar = possibleChar.concat(numerals)
      }
    if (options.specialChar === "Y") 
      {
        possibleChar = possibleChar.concat(specialChar)
      }
    
      for (i = 0; i < options.passwordLength; i++) {
        var randomized = getRandom(possibleChar);
        resultArray.push(randomized)
        console.log(resultArray)
      }
    return resultArray.join("")
  }

  

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() 
{
  var password = possibleOptions();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


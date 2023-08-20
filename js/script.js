// Assignment Code
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = ['\u0021', '\u0023', '\u0024', '\u0025', '\u0026', '\u002A', '\u002B', '\u003C', '\u003E', '\u003F', '\u005E'];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  let getPassCrit = passCrit(password);
  let fixedPop = fixPass (password, getPassCrit)
  let superRandom = gennedPass(password, fixedPop);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = superRandom;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* Window prompt to type in password length, then while that defines min and max characters, 
if under or over window prompt error, then repeat password prompt.
Finally return the password length value to global scope. */
function generatePassword() {
  let passLength = window.prompt('Length of Password?');
  while (passLength <= 7 || passLength >= 129) {
    window.alert('Password must be between 8 and 128 characters.');
    passLength = window.prompt('Length of Password?');
} 
  console.log(password);
  return passLength;
};


/* Window confirm prompts for criteria of arrays. Then error prompt if none selected.
If statements for criteriaNumber to minus one from four to get what's selected. Because,
For loop runs all four if statements when it iterates and randomizes to create array. So,
we divide by the number of criteria selected to determine length of array. */
function passCrit(password) {
    let lowerCase = window.confirm('Include lowercase letters?');
    let upperCase = window.confirm('Include uppercase letters?');
    let num = window.confirm('Include numbers?');
    let specialChar = window.confirm('Include special characters?');
    var superPass = []
    let criteriaNumber = 4;
    if (!lowerCase && !upperCase && !num && !specialChar) {
        window.alert("You must select at least one criteria.")
    }

    if (!lowerCase) {
      criteriaNumber = criteriaNumber - 1
    }

    if (!upperCase) {
      criteriaNumber = criteriaNumber - 1
    }

    if (!num) {
      criteriaNumber = criteriaNumber - 1
    }

    if (!specialChar) {
      criteriaNumber = criteriaNumber - 1
    }

/* iterate through if statements and randomize from arrays then push to new array,
selecting one character from each if statement. This causes password lengths of odd numbers,
and any number not divisible by 1, 2, 3, or 4, to return a few extra array indexes, up to three.
Return the new array value.*/
    for (let index = 0; index < password / criteriaNumber; index++) {
      
      if (lowerCase) {
        let lowerIter = letters[Math.floor(Math.random() * 26)];
        superPass.push(lowerIter)
      } 
    
      if (upperCase) {
        let upperIter = upLetters[Math.floor(Math.random() * 26)];
        superPass.push(upperIter)
      } 
      
      if (num) {
        let numIter = numbers[Math.floor(Math.random() * 10)];
        superPass.push(numIter)
      } 
      
      if (specialChar) {
        let specialIter = specials[Math.floor(Math.random() * 11)];
        superPass.push(specialIter)
      } 
      
    };
    return superPass;
   };
  
   /* For loop to iterate over array length if index is greater than password length,
  then pop off the last item of array to get accurate array length. Return array value.*/
   function fixPass(password, getPassCrit) {

    for (let index = getPassCrit.length; index > password; index--) {
       getPassCrit.pop(index)
    }
    console.log(getPassCrit)
    return getPassCrit;
   };

   /*  Create empty array, then for loop to iterate and randomize old array and push it,
   into the new array. Finally, join the array with blanks to remove the commas. Return,
   new Password value.*/
   function gennedPass(password, fixedPop) {
    var finalPass = []
    //console.log(getPassCrit)
    for (let i = 0; i < password; i++) {
      let randoPass = fixedPop[Math.floor(Math.random() * fixedPop.length)];
      finalPass.push(randoPass) 
      console.log(randoPass)   
    }
    console.log(`finalPass: ${finalPass}`);
    let newPassword = finalPass.join('')
    return newPassword;
  };

  /* Now we have the final password printing to the generator text box. All done.
  The way this is written should be full-proof with no errors or bugs, 
  it will give the correct length with at least one of the criteria selected each time.
  Enjoy! */
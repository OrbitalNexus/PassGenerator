// Assignment Code
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = ['\u0021', '\u0023', '\u0024', '\u0025', '\u0026', '\u002A', '\u002B', '\u003C', '\u003E', '\u003F', '\u005E'];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  let getPassCrit = passCrit();
  let superRandom = firstRandom();
  //let randomize = gennedPass(password, getPassCrit);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Window prompt to type in password length, then while that defines min and max characters, if under or over window prompt error, then repeat password prompt.
// Finally return the password length value to global scope. 
function generatePassword() {
  let passLength = window.prompt('Length of Password?');
  while (passLength <= 7 || passLength >= 129) {
    window.alert('Password must be between 8 and 128 characters.');
    passLength = window.prompt('Length of Password?');
} 
  console.log(password);
  return passLength;
};


// window confirm prompts for criteria of arrays. Then error prompt if none selected.
// Then push arrays into new array if they have been selected.
function passCrit(passLength) {
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

// password is showing as undefined but using the number divided by true criteria works. 
    for (let index = 0; index < 20 / criteriaNumber; index++) {
      
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
    console.log(criteriaNumber)
    console.log(superPass)
    return superPass;
   };
  
// Sometimes password array gives + 1, 2, or 3 extra indexes so we just need to take the output array
// and check if it's equal to length of password and pop off one, two, or three from end of array.

// OR check after each 
/*
    else if (lowerCase && upperCase && num && specialChar) {
       superPass.push(letters.concat(upLetters, numbers, specials));
    }

    else if (lowerCase && upperCase && num) {
      superPass.push(letters.concat(upLetters, numbers))
   }

    else if (upperCase && num && specialChar) {
      superPass.push(upLetters.concat(numbers, specials))
    }
// Works gave less characters once, throwing commas in sometimes.
    else if (lowerCase && upperCase && specialChar) {
      superPass.push(letters.concat(upLetters, specials))
    }

    else if (lowerCase && num && specialChar) {
      superPass.push(letters.concat(numbers, specials))   
    }

    else if (lowerCase && upperCase) {
      superPass.push(letters.concat(upLetters))
      //console.log(`lowercase + uppercase: ${superPass}`)   
    }
    
    else if (lowerCase && num) {
      superPass.push(letters.concat(numbers))   
      //console.log(`lowercase + numbers: ${superPass}`)
    }

    else if (lowerCase && specialChar) {
      superPass.push(letters.concat(specials));   
    }

    else if (upperCase && num) {
      superPass.push(upLetters.concat(numbers));
      //console.log(`uppercase + numbers: ${superPass}`)   
    }

    else if (upperCase && specialChar) {
      superPass.push(upLetters.concat(specials));   
    }

    else if (num && specialChar) {
      superPass.push(numbers.concat(specials));   
    }

    else if (lowerCase) {
      superPass.push(letters);
    }

    else if (upperCase) {
      superPass.push(upLetters)
    }

    else if (num) {
      superPass.push(numbers)
    }

    else { 
      superPass.push(specials)
    }
    // console.log(superPass)
    return superPass[0];
  }; 
  */

// using parameters of password length and criteria create new array then loop through until meets length. 
// Then randomize the new array and print out password while removing commas. 
/*function gennedPass(password, getPassCrit) {
  var finalPass = []
  //console.log(getPassCrit)
  for (let i = 0; i < password; i++) {
    let randoPass = getPassCrit[Math.floor(Math.random() * getPassCrit.length - 1)];
    finalPass.push(randoPass)
    
    // const element = array[i];
  }
  // console.log(`finalPass: ${finalPass}`);
  let newPassword = finalPass.join('')
  return newPassword;
}


/*function firstRandom(password, getPasscrit) {
  let firstPass = []

  while (lowerCase) {
    let lowerIter = lowerCase[Math.floor(Math.random() * 1)];
    firstPass.push(lowerIter)
  }

  while (upperCase) {
    let upperIter = upperCase[Math.floor(Math.random() * 1)];
    firstPass.push(upperIter)
  }
  while (num) {
    let numIter = num[Math.floor(Math.random() * 1)];
    firstPass.push(numIter)
  }
  while (specialChar) {
    let specialIter = specialChar[Math.floor(Math.random() * 1)];
    firstPass.push(specialIter)
  }
  console.log(firstPass) 
} */
// TO DO:
// Create pattern to iterate over each criteria, then take string of password and randomize that again.
// Create functions that iterate over array criteria then return value and next function does the same,
// so on, until the final array has the length. 
/* 

// DONE!
Ask the user to put in the amount of characters they want in their password and verify if it meets the standards of 8 to 60 characters
if password is 0, return an alert and if password is smaller than 8 or larger than 60 characters return an alert error else move on to step 2.

  
Ask the user if they would like to have capital letters in their password, lowercase, numbers, or special characters

  
Once have answers, make some conditional statements on whether they chose yes or no for the questions in step 2  to see if they selected all the items, none, or only some of them and then join the arrays into 1

  
Take the information that was joined into 1 array and then run it through a for loop and then randomize the array to the length of what the user put in and then return it and pass it into our password variable

*/

// This is not working right. LET"S FIX THIS. We can do this Josh.
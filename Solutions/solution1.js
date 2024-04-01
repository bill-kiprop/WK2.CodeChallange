function switchCase(str) {//the function takes a string as input

    let switched = ''//Initialize an empty string to store the final string
    for (let i = 0; i < str.length; i++) //Loops through each character in the string

      {const char = str[i]//gets the current character
      if (char === char.toUpperCase()) {//checks if the first letter is uppercase and converts it to lowercase
        switched += char.toLowerCase()
      } else {
        switched += char.toUpperCase()//If lowercase, convert to uppercase and add to the result
      }
    }
    return switched// Return the final modified string
  }
  
console.log(switchCase("The Quick Brown Fox"))//tHE qUICK bROWN fOX
  
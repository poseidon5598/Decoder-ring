// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  function uniqueCharacters(str) {
    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++) {
            if (str[i] == str[j]) return false;
        }
    }
    return true;
}
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let code = "";
    if(encode){
      input = input.toLowerCase();
      if(alphabet !== undefined && alphabet.length == 26 && uniqueCharacters(alphabet)){
        for( let i=0; i < input.length; i++) {
          for( let j=0; j < letters.length; j++) {
            if(input[i] == letters[j]) {
              code += alphabet[j];
              break;
            }else if(input[i].trim().length == 0) {
              code += " ";
              break;
            }
          }
        }
        return code;
      }else return false;
    }else{
      if(alphabet.length == 26 && uniqueCharacters(alphabet)){
        for( let i=0; i < input.length; i++) {
          for( let j=0; j < alphabet.length; j++) {
            if(input[i] == alphabet[j]) {
              code += letters[j];
              break;
            }else if(input[i].trim().length == 0) {
              code += " ";
              break;
            }
          }
        }
        return code;
      }else return false;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

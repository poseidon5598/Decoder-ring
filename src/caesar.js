// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  function caesar(input, shift, encode = true) {
    // your solution code here
    if(encode == false) shift = -shift;
    input = input.toLowerCase();
    let nume = "";
    if(shift > 0 && shift <25) {
     for(let i=0; i < input.length; i++) {
      let founded = false;
        for(let j=0; j < letters.length; j++) {
            if( input[i] == letters[j]) {
                if( j + shift <= 25) {
                let codedLetter = j + shift;
                nume += letters[codedLetter];
                founded = true;
                break;
                }else{
                nume += letters[j + shift - 26];
                founded = true;
                break;
            };
        }
      }
      if(!founded) nume += input[i];
    }
    return nume;
   }else if(shift < 0 && shift >= -25) {
    for(let i=0; i < input.length; i++) {
      let founded = false;
        for(let j=0; j < letters.length; j++) {
        if( input[i] == letters[j]) {
          if( j + shift >= 0) {
            nume += letters[j + shift];
            founded = true;
            break;
          }else{
            nume += letters[j + shift + 26];
            founded = true;
          break;
          }
        }
      }
      if(!founded) nume += input[i];

    }
    return nume;    
   }else return false; 
  }
  

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

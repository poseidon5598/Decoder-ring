// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");
describe("polybius() submission tests written by Cristian", () => {
    it("should translate both 'i' and 'j' to 42", () => {
        const message = "jiggle";
        const actual = polybius(message);
        const expected = "424222221351";
  
        expect(actual).to.equal(expected);
    });
    
    it("should translate 42 to both 'i' and 'j'", () => {
        const message = "424222221351";
        const actual = polybius(message, false);
  
        expect(actual).to.include("i");
        expect(actual).to.include("j");
    });

    it("should ignore capital letters", () => {
        const message = "Message";
        const actual = polybius(message);
        const expected = "23513434112251";
  
        expect(actual).to.equal(expected);
    });

    it("should mantain the spaices when encoding", () => {
        const message = "a message";
        const actual = polybius(message);
        const expected = "11 23513434112251";
  
        expect(actual).to.equal(expected);
    });

    it("should mantain the spaces when decoding", () => {
        const message = "11 23513434112251";
        const actual = polybius(message, false);
        const expected = "a message";
  
        expect(actual).to.equal(expected);
    });


})


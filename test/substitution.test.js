// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() submission tests written by Cristian", () => {
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const message = "message";
        const alphabet = "short";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    });

    it("should decode a message by using the given substitution alphabet", () => {
        const message = "ykrrpik";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet, false);
        const expected = "message";
  
        expect(actual).to.equal(expected);
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
        const message = "message";
        const alphabet = "abcabcabcabcabcabcabcabcab";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    });

    it("should mantain spaces in the message when decoding", () => {
        const message = "my message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "yp ysii.rs";
  
        expect(actual).to.equal(expected);
    });

    it("should mantain spaces in the message when decoding", () => {
        const message = "yp ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "my message";
  
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const message = "Message";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet);
        const expected = "ykrrpik";
  
        expect(actual).to.equal(expected);
    });
})

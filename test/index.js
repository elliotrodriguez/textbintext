var should = require('chai').should(),
    textbintext = require('../index');
    toBinary = textbintext.toBinary;
    toText = textbintext.toText;

describe('#toBinary', function() {
    it('converts Hello World into binary with spaces between the numbers', function() {
        toBinary('Hello World!', true).should.equal('01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001');
    });

    it ('converts Hello World into binary without spaces between the numbers', function() {
        toBinary('Hello World!', false).should.equal('010010000110010101101100011011000110111100100000010101110110111101110010011011000110010000100001');
    });

    it ('converts a single binary value to a single ASCII character regardless of spacing', function() {
        toText('01001000', true).should.equal('H');
    });

     it ('converts a single binary value with spaces to a single ASCII character with spaces', function() {
        toText('01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001', true).should.equal('Hello World!');
    });
})    
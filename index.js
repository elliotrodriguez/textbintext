"use strict";
var zeroFill = require('zero-fill');
module.exports = {
    toBinary: function (strToConvert, addWhiteSpace) {
        var binaryValuePreFill = '', binaryValue = '', strPosition;
        for (strPosition = 0; strPosition < strToConvert.length; strPosition += 1) {
            binaryValuePreFill = strToConvert.charCodeAt(strPosition).toString(2);
            binaryValue += zeroFill(8, binaryValuePreFill);
            if (addWhiteSpace && (strPosition !== strToConvert.length)) {
                binaryValue += ' ';
            }
        }
        return binaryValue.trim();
    },
    toText: function (strBinaryToConvert) {
        var intAsciiNumberInBaseTen = 0,
            binaryNumbersArray = [],
            intArrayCounter,
            intStrPos,
            subStrItem,
            stringToReturn = '';
        if (strBinaryToConvert.indexOf(' ') > 0) {
            binaryNumbersArray = strBinaryToConvert.split(' ');
        } else {
            for (intStrPos = 0; intStrPos !== strBinaryToConvert.length; intStrPos += 8) {
                subStrItem = strBinaryToConvert.substr(intStrPos, 8);
                binaryNumbersArray.push(subStrItem);
            }
        }
        if (binaryNumbersArray.length > 0) {
            for (intArrayCounter = 0; intArrayCounter !== binaryNumbersArray.length; intArrayCounter += 1) {
                intAsciiNumberInBaseTen = parseInt(binaryNumbersArray[intArrayCounter], 2);
                stringToReturn += String.fromCharCode(intAsciiNumberInBaseTen);
            }
        }
        return stringToReturn;
    }
};
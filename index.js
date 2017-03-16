"use strict";
var zeroFill = require('zero-fill');
module.exports = {
    toBinary: function (strToConvert, addWhiteSpace) {
        var binaryValuePreFill = '', binaryValue = '', strPosition;
        if (strToConvert.length === 0) {
            return null;
        }
        for (strPosition = 0; strPosition < strToConvert.length; strPosition += 1) {
            binaryValuePreFill = strToConvert.charCodeAt(strPosition).toString(2);
            binaryValue += zeroFill(8, binaryValuePreFill);
            if (addWhiteSpace && (strPosition !== strToConvert.length)) {
                binaryValue += ' ';
            }
        }
        return binaryValue.trim();
    }
};
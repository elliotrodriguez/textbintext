textbintext
===========

A library that turns your ASCII text into binary, and back again if you like.

## Installation
npm install textbintext --save

## Usage
```
var textbintext = require('textbintext');
var toBinary = textbintext.toBinary('Hello World!'); //01001000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100 00100001
var toText = textbintext.toText('01001000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100 00100001'); //Hello World!
```
## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

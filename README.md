textbintext
===========

A library that turns your ASCII text into binary, and back again if you like. No, this is not a substitute in any way for proper hashing and encryption and I do not accept any responsibility if your super secret secrets are delivered using this package and people manage to learn them.

## Installation

npm install textbintext --save

## Usage

```
var textbintext = require('textbintext');
var toBinary = textbintext.toBinary('Hello World!'); //01001000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100 00100001
var toText = textbintext.toText('01001000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100 00100001'); //Hello World!
```

## Tests

```
npm run test
```

## Use Cases

- Email your friends from a node app and pretend it came from SkyNet
- Output random strings to your Johnny Five powered robot for kicks
- Send a note to your parents/SO in binary numbers and convince them they have discovered a glitch in the matrix

## Miscellaneous

- If you input a binary string that is not correctly padded, you may get some unexpected results. YMMV.
- As of now I don't know how long of a string you can use before something unexpected happens. It should be OK with anything less than the contents of War and Peace.
- This was intended to be a fun, quick, back-of-the-envelope module that I was inspired to create when messing around with some string and number manipulations in JS one day. It could use some optimizations. 

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

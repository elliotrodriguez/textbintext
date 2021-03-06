textbintext
===========

A library that turns your ASCII text into binary, and back again if you like. No, this is not a substitute in any way for proper hashing and encryption and I do not accept any responsibility if your super secret secrets are delivered using this package and people manage to learn them.

## Installation

```
npm install textbintext --save
```

## Usage

```
var textbintext = require('textbintext');
var toBinary = textbintext.toBinary('Hello World!', true); //01001000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100 00100001
var toText = textbintext.toText('01001000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100 00100001'); //Hello World!
```
the ```toBinary``` method accepts a string, and a boolean to indicate whether you want your output spaced in bytes. If you omit it, or specify false, you'll get one long string.

## Tests

```
npm run test
```

## Use Cases

- Email your friends from a node app and pretend it came from SkyNet
- Output random strings to your Johnny Five powered robot for kicks
- Send a note to your parents/signficant other in binary numbers and convince them they have discovered a glitch in the matrix
- Use an API like Twilio to write an app that sends you texts in binary numbers, decode it in front of your friends, and convince them you are receiving messages from Russian hackers by mistake

What can **your** imagine dream up?

## Miscellaneous

- If you input a binary string that is not correctly padded, you may get some unexpected results. YMMV.
- As of now I don't know how long of a string you can use before something unexpected happens. It *should* be OK with anything less than the contents of War and Peace. I have experimented with strings of up to 100,000 characters and results have been good. 
- This was intended to be a fun, quick, back-of-the-envelope module that I was inspired to create when messing around with some string and number manipulations in JS one day. It could use some optimizations so that eventually it can turn War and Peace into binary strings (because why not?). This project is active though, so please add issues for any weirdness you encounter while I was scribbling things down.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

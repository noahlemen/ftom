# ftom

Convert frequency to corresponding MIDI note number. Based on Max's [`ftom`](https://docs.cycling74.com/max5/refpages/max-ref/ftom.html)

## installation
```bash
$ npm install --save ftom
```

## usage
#### ftom(frequency, concertPitch = 440)
Convert frequency to MIDI note number. Second parameter sets concert pitch, defaulting to A = 440 Hz. 

_Does not round result to nearest integer! Consider this a **feature**!_
```js
var ftom = require('ftom');

ftom(440);
// => 69
```

## see also
- [`mtof`](https://github.com/kedromelon/mtof)

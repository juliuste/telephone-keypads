# telephone-keypads

Language-specific and language-independent telephone keypad assignments according to [**ETSI ES 202 130, _v2.1.1_**](https://www.etsi.org/deliver/etsi_es/202100_202199/202130/02.01.01_50/es_202130v020101m.pdf).

[![npm version](https://img.shields.io/npm/v/telephone-keypads.svg)](https://www.npmjs.com/package/telephone-keypads)
[![Build status](https://travis-ci.org/juliuste/telephone-keypads.svg?branch=master)](https://travis-ci.org/juliuste/telephone-keypads)
[![Greenkeeper badge](https://badges.greenkeeper.io/juliuste/telephone-keypads.svg)](https://greenkeeper.io/)
[![License](https://img.shields.io/github/license/juliuste/telephone-keypads.svg?style=flat)](license)

## Installation

```bash
npm install telephone-keypads
```

## Usage

A telephone keypad generally has the following structure:

```js
// example: greek keypad
{
    "1": [],
    "2": ["α", "β", "γ", "2", "ά", "a", "b", "c"],
    "3": ["δ", "ε", "ζ", "3", "έ", "d", "e", "f"],
    "4": ["η", "θ", "ι", "4", "ή", "ί", "ϊ", "ΐ", "g", "h", "i"],
    "5": ["κ", "λ", "μ", "5", "j", "k", "l"],
    "6": ["ν", "ξ", "ο", "6", "ό", "m", "n", "o"],
    "7": ["π", "ρ", "σ", "ς", "7", "p", "q", "r", "s"],
    "8": ["τ", "υ", "φ", "8", "ύ", "ϋ", "ΰ", "t", "u", "v"],
    "9": ["χ", "ψ", "ω", "9", "ώ", "w", "x", "y", "z"],
    "0": []
}
```

The following keypads are currently supported:

### Language independent

#### Cyrillic

```js
// pick one of these methods to import the keypad
const cyrillic = require('telephone-keypads').languageIndependent.cyrillic
const cyrillic = require('telephone-keypads/language-independent/cyrillic.json')
```

#### Latin

```js
// pick one of these methods to import the keypad
const latin = require('telephone-keypads').languageIndependent.latin
const latin = require('telephone-keypads/language-independent/latin.json')
```

### Language specific

#### Chinese (Pinyin)

```js
// pick one of these methods to import the keypad
const pinyin = require('telephone-keypads').languageSpecific.pinyin
const pinyin = require('telephone-keypads/language-specific/pinyin.json')
```

#### French

```js
// pick one of these methods to import the keypad
const french = require('telephone-keypads').languageSpecific.french
const french = require('telephone-keypads/language-specific/french.json')
```

#### German

```js
// pick one of these methods to import the keypad
const german = require('telephone-keypads').languageSpecific.german
const german = require('telephone-keypads/language-specific/german.json')
```

#### Greek

```js
// pick one of these methods to import the keypad
const greek = require('telephone-keypads').languageSpecific.greek
const greek = require('telephone-keypads/language-specific/greek.json')
```

#### Hebrew

```js
// pick one of these methods to import the keypad
const hebrew = require('telephone-keypads').languageSpecific.hebrew
const hebrew = require('telephone-keypads/language-specific/hebrew.json')
```

#### Polish

```js
// pick one of these methods to import the keypad
const polish = require('telephone-keypads').languageSpecific.polish
const polish = require('telephone-keypads/language-specific/polish.json')
```

#### Turkish

```js
// pick one of these methods to import the keypad
const turkish = require('telephone-keypads').languageSpecific.turkish
const turkish = require('telephone-keypads/language-specific/turkish.json')
```

Feel free to contribute and add more languages here!

## Contributing

If you found a bug, want to add support for another language or propose a feature, feel free to visit [the issues page](https://github.com/juliuste/telephone-keypads/issues).

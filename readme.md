# headerize [![Build Status](https://travis-ci.org/ragingwind/node-headerize.svg?branch=master)](https://travis-ci.org/ragingwind/node-headerize)

> Generate a headerize string


## Install

```
$ npm install --save headerize
```


## Usage

```js
var headerize = require('headerize');

headerize('lowerUpper'); //=> 'Lower Upper'
headerize(' lowerUpper', {trim: true}); //=> 'Lower Upper'
headerize('_lowerUpper', {trim: true}); //=> 'Lower Upper'
headerize('.lowerUpper', {trim: true}); //=> 'Lower Upper'
headerize('/lowerUpper', {trim: true}); //=> 'Lower Upper'
headerize(' /._lowerUpper', {trim: true}); //=> 'Lower Upper'
headerize('lower-Upper'); //=> 'Lower Upper'
headerize('lower Upper'); //=> 'Lower Upper'
headerize('lower.Upper'); //=> 'Lower Upper'
headerize('lower.Upper'); //=> 'Lower Upper'
headerize('lower upper'); //=> 'Lower Upper'
```


## API

### headerize(input, [options])

#### input

Type: `string`

Target string

#### options

##### trim

Type: `boolean`  
Default: `false`

Do left trim

## License

MIT © [Jimmy Moon](http://ragingwind.me)

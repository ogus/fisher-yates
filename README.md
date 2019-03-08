# Shuffling

 A simple module to shuffle any sequence with the Fisher-Yates algorithm


## Usage

```js
var Shuffling = require('shuffling');

// Shuffle an Array
var new_array = Shuffling.shuffle([0, 2, 4, 6, 8]);  
console.log(new_array);   // output:  [4, 0, 2, 8, 6]

// Shuffle an Array asynchronously (Promise)
Shuffling.suffle_async([0, 2, 4, 6, 8]).then(function (new_array) {
  console.log(new_array);    // output:  [6, 2, 4, 8, 0]
});

// Shuffle a String
var new_word = Shuffling.shuffle("word");
console.log(new_word);    // output: ["w", "r", "o", "d"]
```

## API

### Main methods

#### `shuffle(sequence [, async])`

Shuffle the elements of the input sequence, and return the result as an `Array`.

If `async` is evaluated to `true`, it return a `Promise` with the result `Array`.

*Note:* The sequence can be any Array-like or iterable object accepted by the `Array.from()` methods, as defined on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

#### `shuffle_async(sequence)` *(deprecated)*

Strictly equivalent to `shuffle(async, true)`. Return a `Promise`.

### WebWorker

The module can be used as a `WebWorker`, by posting the sequence to shuffle as a message.

```js
var myWorker = new Worker('shuffling.js');

myWorker.postMessage([1, 2, 3, 4]);
myWorker.onmessage = function (e) {
  console.log(e.data);    // output: [2, 3, 1, 4, 5]
}
```


## Installation

You can install the module with [npm](https://www.npmjs.com/)
```sh
npm install shuffling
```

You can import the module with a CDN like [unpkg](https://unpkg.com/)
```html
<script type="text/javascript" src="https://unpkg.com/shuffling@latest"></script>
```

You can clone the repository & include the `shuffling.js` file in your project:
```sh
git clone https://github.com/ogus/shuffling.git
```


## License

This project is licensed under the WTFPL - see [LICENSE](LICENSE) for more details

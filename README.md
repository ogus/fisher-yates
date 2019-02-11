# Shuffling

> A simple module to shuffle any sequence with the Fisher-Yates algorithm


## Usage

```js
var Shuffling = require('shuffling');

var array = [0, 2, 4, 6, 8];
var new_array = Shuffling.shuffle(array);  
console.log(new_array);   // output:  [4, 0, 2, 8, 6]

// Use a Promise to wait for completion
Shuffling.suffle_async(array).then(function (shuffled) {
  console.log(shuffled);    // output:  [6, 2, 4, 8, 0]
});

// Shuffle any sequence
var word = "word";
var shuffle_word = Shuffling.shuffle(word);
console.log(shuffle_word);    // output: ["w", "r", "o", "d"]
```


## API

The module is composed of a single *static* class `Shuffling`.

### `Shuffling.shuffle(sequence)`

Shuffle the elements of the sequence, and return the result as an Array.

The sequence can be any array-like or iterable object. For a complete list of accepted input, see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

### `Shuffling.shuffle_async(sequence)`

Shuffle the elements of the sequence, and return a `Promise` with the result as an Array.

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

The module can be installed from `npm`

```js
npm install shuffling
```

Or download / clone this repository to copy `shuffling.min.js` from the `src` directory in your own project.


## License

This project is licensed under the WTFPL - see [LICENSE](LICENSE) for more details

# Fisher-Yate suffle algorithm


## Installation

Clone this repository and import `fisher-yates.js` or `fisher-yates.min.js` from the `src` directory in your own project.

This module has no dependencies.


## Usage

### Basic shuffling

To shuffle an array object, use the `shuffle()` method from the static class `FisherYates` :

```js
var array = new Array(100);
for (var i = 0; i < array.length; i++) {
  array[i] = i;
}
// array is [0, 1, 2, ..., 99]


var shuffled = FisherYates.shuffle(array);
// array is now shuffled
```

**Warning :** The method creates and returns a *shallow* copy of the input array

### Async shuffling

The `FisherYates` object provides another method that return a `Promise` instead of the array itself.

```js
var array = new Array(100000);
for (var i = 0; i < array.length; i++) {
  array[i] = i;
}

FisherYates.suffle_async(array).then(function (shuffled_array) {
  // use your shuffled array here...
});
```


The module can also be used as a `WebWorker`

```js
var myWorker = new Worker('worker.js');

myWorker.postMessage(array);
myWorker.onmessage = function (e) {
  var shuffled_array = e.data;
  // use your shuffled array here...
}
```


## License

There is currently no license on this module.

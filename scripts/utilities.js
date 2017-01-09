function forEach(anArray, callback) {
  for (var i = 0; i < anArray.length; i++) {
    callback(anArray[i]);
  }
}

function sampleCallback(i) {
  console.log(i);
}

forEach([1,2,3], sampleCallback);

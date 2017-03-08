function countLetters(inputString) {
  var noSpace = inputString.split(' ').join('');

  var outputObject = {};
  for (var i = 0; i < noSpace.length; i++) {
    var character = noSpace[i];

    if (outputObject[character]) {
      outputObject[character].push(i);
    } else {
      outputObject[character] = [i];
    }
  }
  return outputObject;
}

console.log(countLetters("lighthouse in the house"));
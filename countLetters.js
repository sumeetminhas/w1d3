function countLetters(inputString) {
  var outputObject = {};
  for (var i = 0; i < inputString.length; i++) {
    var character = inputString[i];

    if (outputObject[character]) {
      temp = outputObject[character]
      outputObject[character] = temp + 1;
    } else if {
      outputObject[character] = 1;
    }
  }
  return outputObject;
}

console.log(countLetters("lighthouse in the house"));
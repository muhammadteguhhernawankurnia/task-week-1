function reversedWords(testedText) {
  var resultCheck = "";
  for (var i = testedText.length - 1; i >= 0; i--) {
    resultCheck += testedText[i];
  }
  return resultCheck;
}

console.log(reversedWords("Saya Belajar Javascript"));

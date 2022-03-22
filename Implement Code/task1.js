function checkPalyndrome(testedText) {
  var smallText = testedText.toLowerCase();
  var smallText = smallText.split("").reverse().join("");
  if (smallText === testedText) return "palyndrome";

  return "not palyndrome";
}

//input text to paramater to check palyndrome
console.log(checkPalyndrome("kasurinirusak"));

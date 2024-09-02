module.exports = function toReadable (number) {
let word = "";

let singleDigits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let doubleDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
let digitsBelowHundred = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
if (number < 10) {
    word = singleDigits[number] + ' ';
}
else if (number < 20) {
    word = doubleDigits[number - 10] + ' ';
}
else if (number < 100) {
let remainder = toReadable(number % 10);
word = digitsBelowHundred[(number - number % 10) / 10 - 2]+ ' ' + remainder;
}
else if (number < 1000) {
word = singleDigits[Math.trunc(number / 100)] + ' hundred ' + toReadable(number % 100);
}
return word.trim();
}


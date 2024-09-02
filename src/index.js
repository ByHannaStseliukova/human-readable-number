
module.exports = function toReadable (number) {
let word = "";
let fromZeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tenthsFromZeroToNinety = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
if (number === 0) {
    return 'zero';
}
else if (number < 20) {
    word = fromZeroToNineteen[number] + '';
}
else if (number < 100) {
let remainder = toReadable(number % 10);
word = tenthsFromZeroToNinety[Math.trunc(number / 10)]+ '' + remainder;
}
else if (number < 1000) {
word = fromZeroToNineteen[Math.trunc(number / 100)] + ' Hundred ' + toReadable(number % 100);
}
return word;
}
let result = translate(number);
return result.trim() + '.';

module.exports = function toReadable (number) {
    var converter = require ('number-to-words');
    var translate = converter.toWords(number);
    var replace = translate.replace ('-', ' ');
    return replace;
}

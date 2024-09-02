
module.exports = function toReadable (number) {
    let converter = require ('number-to-words');
    let translate = converter.toWords(number);
    let replace = translate.replace ('-', ' ');
    return replace;
}
'use strict';

var alphabet = require('./alphabet');
var random = require('./random/random-byte');
var { customRandom } = require('nanoid');

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + customRandom(random, alphabet.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = generate;

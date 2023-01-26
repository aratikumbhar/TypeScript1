"use strict";
exports.__esModule = true;
exports.isPalindromessss = void 0;
// true if the input string is a palindrome
function isPalindromessss(str) {
    return str === str.split('').reverse().join('');
}
exports.isPalindromessss = isPalindromessss;

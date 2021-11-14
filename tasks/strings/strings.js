/**
 * 1. Write a method to reverse a string; 
 * 2. The method should return the string 'This is not a string!' if trying to pass a number
 * @param {string} str
 * @return {string} reversed string
 * @example
 * console.log(reverseString('hello)) // 'olleh'
 * console.log(reverseString(123)) // 'This is not a string!'
 */
function reverseString(str) {
  if (typeof (str) !== 'string') {
    return 'This is not a string!';
  }

  // let reversedStr = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversedStr += str.charAt(i);
  // }
  // return reversedStr;

  return str.split('').reverse().join('');
}

/**
 * Calculate a century by given year if a number is passed
 * @param {number} year
 * @return {num} century
 * @example
 * console.log(centuryFromYear(1705)) // 18
 * console.log(centuryFromYear(1900)) // 19
 * console.log(centuryFromYear(1601)) // 17
 */
function centuryFromYear(year) {
  if (typeof year === 'number') {
    return Math.ceil(year / 100);
  }
}

/**
 * Calculate count of the provided char in the string
 * @param {string} str
 * @param {string} char
 * @return {num} number of occurences
 * @example
 * console.log(strCount('Hello', 'o')) // 1
 * console.log(strCount('Hello', 'l')) // 2
 * console.log(strCount('', 'z')) // 0
 */
function strCount(str, char) {
  // let counter = 0;
  // for (let i = 0; i <= str.length; i++) {
  //   if (str[i] === char) {
  //     counter++;
  //   }
  // }
  // return counter;

  if (!(str.includes(char))){
    return 0;
  }
  return str.match(new RegExp(char,"g")).length;
}

/**
 * Write a method to reduce the length of the string or truncate it if it is longer
 * than the given maximum length specified and add "..." to the end. 
 * If it is not that long then we keep it as is.
 * @param {string} str - the initial string
 * @param {num} num - by wht amount of chars it should be truncated
 * @return {string} truncated or the initial string
 * @example
 * console.log(truncateString('This is a long string', 6)) // 'This i...'
 * console.log(truncateString('This', 6)) // 'This'
 */
function truncateString(str, num) {
  let truncatedString = '';

  for (let i = 0; i <= str.length; i++) {
    if (i >= num) {
      break;
    }
    truncatedString += str.charAt(i);
  }
  truncatedString += '...';
  return (str.length <= num) ? str : truncatedString;
}

/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 */
function replace10(text) {
  let regex = /10/g;
  return text.replace(regex, 'ten');
}

/**
 * replace value in square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */
function replaceConfidential(text) {
  let regex = /\[.*?]/g;
  return text.replace(regex, '[CONFIDENTIAL]');
}

module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential
};
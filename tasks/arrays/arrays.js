/**
 * return an array of characters names
 * @param {Array} chars
 * @return {Array} - char names
 */
function getCharactersNames(chars) {
	const arrayOfNames = chars.map(char => char.name);
	return arrayOfNames;
}

/**
 * print (console.log) names of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
	const charsNames = chars.map(char => console.log(char.name));
}

/**
 * return an array of non-human (species !== 'human') characters
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
	const arrOfNonHumanChars = chars.filter(char => char.species !== 'Human');
    return arrOfNonHumanChars;
}

/**
 * return info about character named 'Jerry Smith'
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
	const charJerrySmith = chars.find(char => char.name === 'Jerry Smith');
    return charJerrySmith;
}

/**
 * check if all characters are human. return true if all, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
	const isHuman = chars.every(char => char.species === 'Human');
    return isHuman;
}

/**
 * check if there are any Fish-Person characters. return true if any, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
	const isFishPerson = chars.some(char => char.type === 'Fish-Person');
    return isFishPerson;
}

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 * @example
 * console.log(minItem([2,5,6,3,1,8])) // 4
 */
function minItem(arr) {
	let arrMinIndex = arr.indexOf(arr[0]);
    let minValue = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            arrMinIndex = arr.indexOf(arr[i]);
        }
    }
    return arrMinIndex;
}

module.exports = {
	getCharactersNames,
	printCharacterNames,
	getNonHumanCharacters,
	getJerryInfo,
	isAllHuman,
	isAnyFishPerson,
	minItem
};
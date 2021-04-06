import { randomElement } from './arrays';

/**
 * Well, is it?
 * @param {String} char character
 */
function isVowel(char) {
	return 'aeiou'.includes(char);
}

/**
 * Gives a set of vowel indexes in a string
 * @param {String} word just a lonely ol' string
 * @returns a set of vowel indexes
 */
function vowelIndexes(word) {
	let set = [];
	for (let i = 0; i < word.length; i++) {
		isVowel(word[i]) ? set.push(i) : undefined;
	}
	return set;
}

/**
 * Immutably replace a character in a string
 * @param {String} raw raw string to process
 * @param {Number} index point to replace
 * @param {String} chr character to drop in
 * @returns {String} processed string
 */
function setCharAt(raw, index, chr) {
	if (index > raw.length - 1) return raw;

	return raw.substring(0, index) + chr + raw.substring(index + 1);
}

// const funkyChars_1 = ['🗞', '🦑', '🪕', '💩'];
const funkyChars_2_pre = ['0xE000', '0xE001', '0xA66E', '0x0488', '0x0489', '0xA69A'];
const funkyChars_2 = codePointConverter(funkyChars_2_pre);

/**
 * Converts a set of hexadecimal character codes into UTF-16 string characters
 * @param {string[]} set array of hexadecimal characters
 * @returns UTF-16 string char
 */
function codePointConverter(set) {
	return set.map((element) => String.fromCodePoint(element));
}

/**
 * Replaces characters in a word at random with a given set of indexes that can change as well as a character set to sample from.
 * @param {String} raw immutable base string
 * @param {String} morph alternate string
 * @param {number[]} indexes set of indexes which can be replaced
 * @returns
 */
function wordfucker(raw, morph, indexes) {
	let wheelOfFortune = Math.random() > 0.45 ? raw : morph;

	return setCharAt(wheelOfFortune, randomElement(indexes), randomElement(funkyChars_2));
}

export { isVowel, vowelIndexes, setCharAt, wordfucker };

'use strict';

const offset = 127397;
const A = 65;
const Z = 90;

module.exports = emoji;

function emoji( country ){
	if (!country || country === '') return '';
	const formatted = country.toUpperCase();
	const f = formatted.codePointAt(0);
	const s = formatted.codePointAt(1);

	if (
		formatted.length !== 2
		|| f > Z || f < A
		|| s > Z || s < A
	)
		throw new Error('Not an alpha2 country code');

	return String.fromCodePoint(f + offset)
		+String.fromCodePoint(s + offset);
}

'use strict'

const cyrillic = require('./language-independent/cyrillic')
const latin = require('./language-independent/latin')

const french = require('./language-specific/french')
const german = require('./language-specific/german')
const greek = require('./language-specific/greek')
const hebrew = require('./language-specific/hebrew')
const pinyin = require('./language-specific/pinyin')
const polish = require('./language-specific/polish')
const turkish = require('./language-specific/turkish')

module.exports = {
	languageIndependent: {
		cyrillic,
		latin
	},
	languageSpecific: {
		french,
		german,
		greek,
		hebrew,
		pinyin,
		polish,
		turkish
	}
}

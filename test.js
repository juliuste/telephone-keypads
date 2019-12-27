'use strict'

const tape = require('tape')

const keypads = require('.')

const isValid = t => keypad => {
	t.deepEquals(Object.keys(keypad), ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'keys match')
	Object.values(keypad).forEach(group => {
		t.ok(Array.isArray(group))
	}, 'all groups are arrays')
	t.ok(Object.values(keypad).some(group => group.length > 0), 'some group has characters')
}

const keypadList = [
	...Object.values(keypads.languageIndependent),
	...Object.values(keypads.languageSpecific)
]

tape('telephone-keypads', async t => {
	keypadList.forEach(isValid(t))
	t.equals(keypadList.length, 9, 'number of keypads')
	t.end()
})

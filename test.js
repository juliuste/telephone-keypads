'use strict'

const tapeWithoutPromise = require('tape')
const addPromiseSupport = require('tape-promise').default
const tape = addPromiseSupport(tapeWithoutPromise)

const boilerplate = require('.')

tape('boiler-plate', async t => {
	t.ok(boilerplate)
})

'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events')

$(() => {
  $('#create-game').on('click', events.onCreateGameClick)
  $('#not-a-game-board').on('submit', events.onMakeMove)
})

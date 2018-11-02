const config = require('./config')

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=BAhJIiU5ZjQwODQwYzUxMGJkZDc5ZWUyMjk5MGRhMzE5ZjNhNgY6BkVG--4ec07bed51fc3f910f306fb03a4b6f268616ab31'
    },
    data: {}
  })
}

module.exports = {
  createGame
}

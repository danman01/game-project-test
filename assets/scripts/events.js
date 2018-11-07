const api = require('./api')
const getFormFields = require('../../lib/get-form-fields.js')

const onCreateGameClick = function (event) {
  // ...
  // event.preventDefault

  // TODO
  // save response from server in ui.handleSuccessfulCreate
  // put the game object in store
  api.createGame()
    .then(console.log) // ui.handleSuccessfulCreate
    .catch(console.error)
}

const onMakeMove = function (event) {
  event.preventDefault()

  // think of putting in whatever logic
  // gets your move data here instead
  const cellData = getFormFields(event.target)
  const data = {
    game: {
      cell: {
        index: cellData.cell.index,
        value: cellData.cell.value
      }
    },
    over: false
  }
  console.log(data)
  api.patchMove(data)
    .then((responseData) => {
      console.log(responseData.game.cells)
    })
    .catch(console.err)
}

module.exports = {
  onCreateGameClick,
  onMakeMove
}

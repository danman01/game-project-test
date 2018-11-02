#!/bin/bash

TOKEN=BAhJIiU5ZjQwODQwYzUxMGJkZDc5ZWUyMjk5MGRhMzE5ZjNhNgY6BkVG--4ec07bed51fc3f910f306fb03a4b6f268616ab31

curl --include --request GET 'https://tic-tac-toe-wdi.herokuapp.com/games' \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

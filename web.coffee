express = require 'express'
app     = express()
react   = require 'react'

app.set 'port', (process.env.PORT || 5000)
app.use express.static(__dirname + '/public')

app.get '/', (request, response) ->
  response.send 'Hello World!'

app.listen app.get('port'), ->
  console.log("Node app is running at http://localhost:" + app.get('port'))

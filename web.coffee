express    = require 'express'
react      = require 'react'
browserify = require 'browserify'
app        = require './app/app'

web = express()
web.set 'port', (process.env.PORT || 5000)

web.use express.static(__dirname + '/public')

web.get '/app.js', (req, res) ->
  res.setHeader('content-type', 'application/javascript')
  b = browserify(__dirname + '/app/index.coffee').transform('coffeeify').bundle()
  b.on('error', console.error)
  b.pipe(res)


D = react.DOM
html = react.renderToString(
  D.html(null,
    D.head(null,
      D.title(null, 'Single Page App')
      D.script(null)
    )
    D.body(null,
      app()
      D.script(src: '/app.js')
    )
  )
)

web.get '*', (request, response) ->
  response.send(html)

web.listen web.get('port'), ->
  console.log("Node app is running at http://localhost:" + web.get('port'))

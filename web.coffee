express    = require 'express'
react      = require 'react'
browserify = require 'browserify'

web = express()
web.set 'port', (process.env.PORT || 5000)

web.use express.static(__dirname + '/public')

app.get '/app.js', (req, res) ->
  res.setHeader('content-type', 'application/javascript')
  b = browserify(__dirname + '/app/index.js').bundle()
  b.on('error', console.error)
  b.pipe(res)


D = react.DOM
html = react.renderToString(
  D.html(null,
    D.head(null,
      D.title(null, 'Single Page App')
      D.script(src: '/app.js')
      D.script(null)
    )
    D.body(null,
      D.div(null, 'Hello World')
    )
  )
)

web.get '*', (request, response) ->
  response.send(html)

web.listen web.get('port'), ->
  console.log("Node app is running at http://localhost:" + web.get('port'))

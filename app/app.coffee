React = require 'react'

module.exports = React.createClass
  render: ->
    if global.CSSCharsetRule
      React.DOM.div(null, 'CLINET SIDE')
    else
      React.DOM.div(null, 'SERVER SIDE')


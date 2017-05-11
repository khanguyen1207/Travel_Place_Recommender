var React = require('react')
var ReactRouter = require('react-router')

function NavBar(props){
  return (
    <li onClick={props.toLogin}>
      <a>Login</a>
    </li>
  )
}

module.exports = NavBar

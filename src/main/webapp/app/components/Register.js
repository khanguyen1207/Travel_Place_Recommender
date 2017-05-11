var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link

function Register(props){
  return (
    <li onClick={props.toRegister}>
      <a>Register</a>
    </li>
  )
}

module.exports = Register

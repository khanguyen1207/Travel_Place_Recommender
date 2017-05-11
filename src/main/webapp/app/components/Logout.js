var React = require('react')

function Logout(props){
  return (
    <li onClick={props.handleLogout}>
      <a>Logout</a>
    </li>
  )
}

module.exports = Logout

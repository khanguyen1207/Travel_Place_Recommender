var React = require('react')

function Error(props){
  return (
    <div style={{
      fontSize: '30px',
      textAlign: 'center',
      position: 'absolute',
      marginTop: '40px',
    }}>
      <p> {props.message} </p>
    </div>
  )
}

module.exports = Error

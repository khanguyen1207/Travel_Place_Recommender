var React = require('react');
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {loginSuccess} from '../actions/authentication'

class SubMain extends React.Component{
  constructor(props){
    super(props)
  }
  getCurrentLocation(){
    navigator.geolocation.getCurrentPosition((position)=>{
      //  console.log(position);
    })
  }
  componentDidMount(){
    if (localStorage.getItem('username')!==null){
        console.log('have cookie')
        this.props.autoLogin()
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.state.loginUser.fetched===false){
      localStorage.clear()
    }
  }
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    autoLogin: () => {
      dispatch(loginSuccess())
    }
  }
}

const Main = withRouter(connect(mapStateToProps,mapDispatchToProps)(SubMain))

module.exports = Main

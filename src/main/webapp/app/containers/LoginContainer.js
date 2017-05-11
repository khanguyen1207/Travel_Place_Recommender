var React = require('react')
var LoginForm = require('../components/LoginForm')
import {browserHistory} from 'react-router'
import {loginUser} from '../actions/authentication'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class LoginContainerClass extends React.Component{
  constructor(props){
    super(props);
    this.toRegister = this.toRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      username: '',
      password: ''
    }
  }
  handleLogin(event){
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.props.handleLogin(username,password)
  }
  toRegister(){
    event.preventDefault();
    this.props.router.push('/register');
  }
  onChangeUsername(event){
    event.preventDefault();
    this.setState({
      username: event.target.value
    })
  }
  onChangePassword(event){
    event.preventDefault();
    this.setState({
      password: event.target.value
    })
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.state.loginUser.fetched===true){
      localStorage.setItem('username',this.state.username);
      this.setState({
        username: '',
        password: '',
      })
      this.props.router.push('/')
    }
  }
  render(){
    return (
      <LoginForm
        onChangeUsername={this.onChangeUsername}
        onChangePassword ={this.onChangePassword}
        toRegister={this.toRegister}
        handleLogin={this.handleLogin}
      />
    )
  }
}

function mapStateToProps(state){
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch){
  return {
    handleLogin: (username,password) => {
      dispatch(loginUser(username,password))
    }
  }
}

const LoginContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginContainerClass))

module.exports = LoginContainer

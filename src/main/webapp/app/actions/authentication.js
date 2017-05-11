import fetch from 'isomorphic-fetch'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'
export const REGISTER = 'REGISTER'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

const API_URL = 'http://localhost:8080/'

export function loginRequest(){
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccess(){
  return {
    type: LOGIN_SUCCESS
  }
}

export function register(){
  return {
    type: REGISTER
  }
}

export function registerSuccess(){
  return {
    type: REGISTER
  }
}

export function registerFailure(error){
  return {
    type: REGISTER_FAILURE,
    payload: error.response
  }
}

export function loginFailure(){
  return {
    type: LOGIN_FAILURE
  }
}

export function logout(){
  return {
    type: LOGOUT
  }
}

export function registerUser(username, password){
  return (dispatch) => {
    dispatch(register());
    fetch(`${API_URL}/register`,{
      method: post,
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    })
    .then(() => {
      dispatch(registerSuccess());
    })
    .catch(error => {
      dispatch(registerFailure(error))
    })
  }
}

export function loginUser(username,password){
  return (dispatch) => {
    dispatch(loginRequest());
    fetch(`/login`,{
      method: 'POST',
      credentials: 'same-origin',
      body: createForm(username,password)
    })
    .then(response => {
      console.log(response.status)
      if (response.status===200){
        console.log('success')
        dispatch(loginSuccess());
      }
      else{
        console.log('failed')
        dispatch(loginFailure());
      }
      console.log(response);
    })
    .catch(error => {
      console.log(error);
      dispatch(loginFailure(error))
    })
  }
}

export function logoutUser(){
  return (dispatch) => {
    fetch('/logout',{
      method: 'POST',
      credentials: 'same-origin'
    })
    .then(response => {
      dispatch(logout())
    })
    .catch(error => {
      console.log(error)
    })
  }
}

function createForm(username,password){
  var form = new FormData();
  form.append('username',username);
  form.append('password',password);
  form.append('submit', 'login');
  console.log('key: '+ form.keys() + '; values: ' + form.values());
  return form;
}

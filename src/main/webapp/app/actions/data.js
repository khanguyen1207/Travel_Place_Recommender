import fetch from 'isomorphic-fetch'

const API_URL = 'http://localhost:3000/api'

export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_FAILED = 'SEARCH_FAILED'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const RECOMMEND_REQUEST = 'RECOMMEND_REQUEST'
export const RECOMMEND_SUCCESS ='RECOMMEND_SUCCESS'
export const RECOMMEND_FAILED = 'RECOMMEND_FAILED'

export function searchRequest(){
  return {
    type: SEARCH_REQUEST
  }
}

export function searchFailed(){
  return {
    type: SEARCH_FAILED
  }
}

export function searchSuccess(data){
  return {
    type: SEARCH_SUCCESS,
    payload: data
  }
}

export function recommendRequest(info){
  return {
    type: RECOMMEND_REQUEST,
    payload: info
  }
}

export function recommendFailed(error){
  return {
    type: RECOMMEND_FAILED,
    error: error
  }
}

export function recommendSuccess(data){
  return {
    type: RECOMMEND_SUCCESS,
    payload: data
  }
}

export function searchFetching(query){
  return (dispatch) => {
    dispatch(searchRequest())
    const uri = '/search?keyword=' + query;
    fetch(uri,{
      method: 'GET',
      credentials: 'same-origin'
    })
    .then(response => {
      if(response.status===200){
        return response.json()
      }
      else{
        dispatch(searchFailed())
      }
    })
    .then(json => {
      dispatch(searchSuccess(json))
    })
  }
}

export function recommendFetching(info){
  dispatch(recommendRequest(info))
  return fetch(`${API_URL}/recommend`,{
    method: post,
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(info)
  })
  .then(checkHttpStatus)
  .then(parseJSON)
  .then(response => {
    dispatch(recommendSuccess(response.data))
  })
  .catch(error =>{
    dispatch(recommendFailed(error))
  })
}

import {SEARCH_REQUEST, SEARCH_SUCCESS,
        SEARCH_FAILED, RECOMMEND_SUCCESS,
        RECOMMEND_FAILED, RECOMMEND_REQUEST}
from '../actions/data';

export function searchedLocation(state={
  isFetching: false,
  fetched: false,
  places: [],
  statusText: ''
},action){
  switch (action.type){
    case SEARCH_FAILED:
      return Object.assign({},state,{
          isFetching: false,
          fetched: false,
          statusText: 'Cannot find',
          places: []
      })
    case SEARCH_REQUEST:
      return Object.assign({},state,{
        isFetching: true,
        fetched: false,
        statusText: '',
        places: []
      })
    case SEARCH_SUCCESS:
      return Object.assign({},state,{
        isFetching: false,
        fetched: true,
        statusText: 'Found',
        places: action.payload
      })
    default:
      return state
    }
  }

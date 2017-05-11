var React = require('react')
var NavBar = require('../components/NavBar')
var Detail = require('../components/Detail')
var ReviewForm = require('../components/ReviewForm')
var Review = require('../components/Review')
var SearchBar = require('../components/SearchBar')
import {withRouter} from 'react-router'
import {connect} from 'react-redux'

class SubDetailContainer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
      <NavBar />
      <SearchBar />
		<div id="main" className="detail_page">
			   <Detail />
        <div className="container-fluid review">

	        <div className="row review-row">

	        		<ReviewForm />

		        	<Review />
              <Review />
              <Review />
              <Review />
	        </div>
	       </div>
	    </div>
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
    searchFetching: (query) => {
      dispatch(searchFetching(query))
    }
  }
}

const DetailContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(SubDetailContainer))

module.exports = DetailContainer

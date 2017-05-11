var React = require('react')
var NavBar = require('../components/NavBar')
var SearchBar = require('../components/SearchBar')
var ResultItem = require('../components/ResultItem')
var RecommendContainer = require('./RecommendContainer')
var TopRatedContainer = require('./TopRatedContainer')
var Error = require('../components/Error')
var Map = require('../components/Map')
import {searchFetching} from '../actions/data'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class SubResultContainer extends React.Component{
  constructor(props){
    super(props)
    this.locationOnMap = this.locationOnMap.bind(this)
    this.state = {
      lat: null,
      lng: null
    }
  }
  componentDidMount(){
    const query = this.props.routeParams.query
    this.props.searchFetching(query)
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    if (nextProps.state.searchedLocation.fetched === true
          &&nextProps.state.searchedLocation.isFetching === false
          && nextProps.location.pathname===this.props.location.pathname){
      this.locationOnMap(nextProps.state.searchedLocation.places[0].address)
    }
    else if (nextProps.location.pathname!==this.props.location.pathname){
      const query = nextProps.routeParams.query
      nextProps.searchFetching(query)
    }
  }
  locationOnMap(address){
      const encoded_address = address.replace(/ /g,"+")
      const uri = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encoded_address
      fetch(uri)
        .then(response => response.json())
        .then(function(json){
          this.setState({
            lat: json.results[0].geometry.location.lat,
            lng: json.results[0].geometry.location.lng
          })
        }.bind(this))
  }
  render(){
    return (
        <div style={{paddingLeft:'80px',paddingRight:'80px'}}>
          <NavBar />
          <SearchBar />
          {this.props.state.searchedLocation.places.length!==0 ? ( <div className="container-fluid service" id="service">
                <div className="row service-row">
                  <div className="col-sm-5">
                    <Map lat={this.state.lat} lng={this.state.lng} />
                  </div>
                  <div className="col-sm-7">
                    <p className="text-center">Available places</p>
                    {
                      this.props.state.searchedLocation.places.map(place=>(
                        <ResultItem lat={this.state.lat} lng={this.state.lng} item={place} />
                      ))
                    }
                    <div id="pagination" className="pagination"></div>
                  </div>
                </div>
                <hr style={{'backgroundColor': 'rgba(0,0,0,0.4)', height: '2px'}} />
              </div> )
             : (
               <Error message='No result was found '/>
             )}
          <TopRatedContainer />
          <RecommendContainer />
          <div className="jumbotron copyright">
            <p>Traview&copy; 2017 privacy policy</p>
          </div>
            <i className="arrow-up">
            <i className="fa fa-arrow-up" style={{'fontSize':'25px',color:'#fff','paddingTop':'12px','paddingLeft':'15px'}} aria-hidden="true"></i>
          </i>
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

const ResultContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(SubResultContainer))

module.exports = ResultContainer

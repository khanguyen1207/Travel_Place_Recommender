var React = require('react')
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {searchFetching} from '../actions/data'

class SubSearchBar extends React.Component{
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.state = {
      query: ''
    }
  }
  onChange(event){
    event.preventDefault()
    this.setState({
      query: event.target.value.replace(/ /g,"+")
    })
  }
  handleSearch(event){
    event.preventDefault()
    this.props.router.push('/result/' + this.state.query)
  }
  render(){
    return (
        <div id="main" className="main_search_bar">
                <p id="title">Search Your Destination</p> 
            <div className="search_index" style={{paddingTop:'25px'}}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter the Place" name="srch-term"
                      onChange={this.onChange} id="srch-term" />
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit"
                              onClick={this.handleSearch} name="search">
                              <i className="glyphicon glyphicon-search" id="screenbg"><span className="search_big">Search</span></i>
                            </button>
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

const SearchBar = withRouter(connect(mapStateToProps,mapDispatchToProps)(SubSearchBar))

module.exports = SearchBar

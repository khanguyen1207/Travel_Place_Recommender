var React = require('react')
var NavBar = require('../components/NavBar')
var SearchBar = require('../components/SearchBar')

class FrontPageContainer extends React.Component{
  render(){
    return (
      <div>
        <NavBar />
        <SearchBar />
      </div>
    )
  }
}


module.exports = FrontPageContainer

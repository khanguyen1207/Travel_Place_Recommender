var React = require('react')
var TopRatedItem = require('../components/TopRatedItem')

class TopRatedContainer extends React.Component{
  render(){
    return (
      <div className="container-fluid explore">
        <h1>Top Destinations In <span className="logo"> Traview</span></h1>
          <div className="row explore-row">
            <TopRatedItem />
            <TopRatedItem />
            <TopRatedItem />
            <TopRatedItem />
          </div>
          <hr style={{'backgroundColor':'rgba(0,0,0,0.4)', height:'2px'}} />
      </div>
    )
  }
}

module.exports = TopRatedContainer

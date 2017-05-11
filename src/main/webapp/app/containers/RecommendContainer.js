var React = require('react')
var RecommendItem = require('../components/RecommendItem')

class RecommendContainer extends React.Component{
  render(){
    return (
      <div className="container-fluid explore" id="recommended">
          <h1>RECOMMENDED PLACES FOR YOU</h1>
          <div className="row explore-row">
            <RecommendItem />
            <RecommendItem />
            <RecommendItem />
            <RecommendItem />
          </div>
          <hr style={{'backgroundColor':'rgba(0,0,0,0.4)', height:'2px'}} />
      </div>
    )
  }
}

module.exports = RecommendContainer

var React = require('react')

function TopRatedItem(props){
  return (
    <div className="col-sm-3 col-md-3">
        <img src="./app/images/topplaces.jpg" className="img img-responsive" style={{'backgroundSize':'cover no-repeat'}} />
    </div>
  )
}

module.exports = TopRatedItem

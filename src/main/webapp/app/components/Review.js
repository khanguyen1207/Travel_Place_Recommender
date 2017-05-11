var React = require('react')

function Review(props){
  return (
    <div className="well">
      <div>
        <strong style={{fontSize: '20px'}}>Sahara</strong>
        &nbsp; &nbsp;
    <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star-empty"></span>
              <span className="glyphicon glyphicon-star-empty"></span>
              <span className="glyphicon glyphicon-star-empty"></span>
          </div>
          <p>
            <span className="glyphicon glyphicon-arrow-right"></span>
            This place is awesome guys! Please add it in your bucket list.
          </p>
    </div>
  )
}

module.exports = Review

var React = require('react')
import {withRouter} from 'react-router'

class SubResultItem extends React.Component{
  constructor(props){
    super(props)
    this.toDetail = this.toDetail.bind(this)
  }
  toDetail(event){
    event.preventDefault()
    this.props.router.push({
      pathname: 'detail',
      state: {
        item: this.props.item,
        lat: this.props.lat,
        lng: this.props.lng
      }
    })
  }
  render(){
    const stars = []
    for (var i=0; i<this.props.item.avgRating; i++){
      stars.push((<span className="glyphicon glyphicon-star"></span>))
    }
    for (var m=0; m<(5-this.props.item.avgRating);m++){
      stars.push((<span className="glyphicon glyphicon-star-empty"></span>))
    }
    return (
      <div className="well">
          <p style={{display:'inline', 'paddingRight': '20px'}}> {this.props.item.address} </p>
              {
                stars.map(star=>(
                  star
                ))
              }
              {/* <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star-empty"></span>
              <span className="glyphicon glyphicon-star-empty"></span>
              <span className="glyphicon glyphicon-star-empty"></span> */}
            
              <span style={{float:'right'}}>
              <a onClick={this.toDetail}
                style={{'marginLeft':'20px'}}
                className="btn btn-xs btn-primary" > More <span className="glyphicon glyphicon-chevron-right"></span></a>
          </span>
      </div>
    )
  }
}

const ResultItem = withRouter(SubResultItem)

module.exports = ResultItem

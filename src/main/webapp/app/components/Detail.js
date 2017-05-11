var React = require('react')
var Map = require('../components/Map')
import {withRouter} from 'react-router'

function SubDetail(props){
  const stars = []
  for (var i=0; i<props.location.state.item.avgRating; i++){
    stars.push((<span className="glyphicon glyphicon-star"></span>))
  }
  for (var m=0; m<(5-props.location.state.item.avgRating);m++){
    stars.push((<span className="glyphicon glyphicon-star-empty"></span>))
  }
  return (
    <div>
    <div className="header" style={{marginTop:'30px'}} >
      <h1 style={{fontSize:'30px',marginBottom:'30px',marginLeft:'30px'}}> {props.location.state.item.placeName} &nbsp; &nbsp;
        {
          stars.map(star=>(
            star
          ))
        }
      </h1>
    </div>
        <div className="container-fluid detail">
          <div className="row detail-row">
            <div className="col-sm-6 image-col-sm-6">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                          <li data-target="#myCarousel" data-slide-to="1"></li>
                          <li data-target="#myCarousel" data-slide-to="2"></li>
                          <li data-target="#myCarousel" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                          <div className="item active">
                          <img style={{width:'100%',height:'auto'}} src={props.location.state.item.photos[0]} />      
                          </div>

                            <div className="item">
                             <img style={{width:'100%',height:'auto'}} src={props.location.state.item.photos[0]} />         
                            </div>
                             <div className="item">
                                <img style={{width:'100%',height:'auto'}} src={props.location.state.item.photos[0]} />      
                            </div>
                            <div className="item">
                                <img style={{width:'100%',height:'auto'}} src={props.location.state.item.photos[0]} />      
                            </div>
                        </div>


                        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
              
            </div>

            <div className="col-sm-6 detail-col-sm-6">
              <div style={{backgroundColor: '#fff',padding: '15px'}}>
                <h3 className="text-center"> {props.location.state.item.address} </h3>
                <p>
                </p>
              </div>
          <div className="well detail-well" style={{backgroundColor:'#fff'}}>
            <div>
              <Map lat={props.location.state.lat} lng={props.location.state.lng} />
            </div>

          </div>
            </div>
          </div>
        </div>
      </div>
  )
}

const Detail = withRouter(SubDetail)

module.exports = Detail

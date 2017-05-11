var React = require('react')

class Map extends React.Component{
  constructor(props){
    super(props)
  }
  generateMap(lat,lng){
    const uluru = new google.maps.LatLng(lat,lng);
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: uluru
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
  componentDidMount(){
    this.generateMap(this.props.lat,this.props.lng)
  }
  componentWillReceiveProps(nextProps){
    this.generateMap(nextProps.lat,nextProps.lng)
  }
  render(){
    return (
      <div id='map' style={{'marginTop':'36px ',height:'330px'}}>
      </div>
    )
  }
}

module.exports = Map

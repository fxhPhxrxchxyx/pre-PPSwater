import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC-KwXvLe9iwXN1f19OPsdC_KwRshcURtI" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={13.809543}
            lng={100.064125}
            text="PPS Water"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;

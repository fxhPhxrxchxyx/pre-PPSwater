import React, { Component } from "react";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <iframe
            width="600"
            height="450"
            style={{ border: 0, borderRadius: 15 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/search?q=%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%9E%E0%B8%B9%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%9E%E0%B8%A2%E0%B9%8C&key=AIzaSyAwL76amt4GwxrueQ96r1tqbF2z4ggKxsg"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Map;

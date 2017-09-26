import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

class SimpleMap extends Component {

  render() {
    const mapCenter = {
      lat: this.props.flat.lat,
      lng: this.props.flat.lng
    }

    return (
      <div className="map-container">
        <GoogleMapReact

          defaultCenter={mapCenter}
          defaultZoom={11}
          center={mapCenter}
        >
          <AnyReactComponent
            lat={this.props.flat.lat}
            lng={this.props.flat.lng}
            text={this.props.flat.name}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

// apiKey={YOUR_GOOGLE_MAP_API_KEY}

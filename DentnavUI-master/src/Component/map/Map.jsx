import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: -34.397, lng: 150.644 } }
        defaultZoom = { 10 }
      >
          <Marker position={{ lat: -34.397, lng: 150.644 }} />
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`,marginTop:"20px", width: '1200px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;
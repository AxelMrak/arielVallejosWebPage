import React from 'react'
import GoogleMaps from 'simple-react-google-maps';
import { key } from '../services/googleApi';

function Map() {
  return (
      <GoogleMaps
          apiKey={key}
          style={{ height: "400px", width: "100%", borderRadius: '25px' }}
          zoom={11}
          center={{ lat: -34.822467, lng: -58.515892 }}
          markers={[
              {
                  lat: -34.8490263,
                  lng: -58.5187667
              },
              {
                  lat: -34.8973197,
                  lng: -58.5614977
              },
              {
                  lat: -34.8143143,
                  lng: -58.4753615
              },
              {
                  lat: -34.7475454,
                  lng: -58.4746641
              },
              {
                  lat: -34.8318146,
                  lng: -58.495036
              }
          ]} //optional
      />
  )
}

export default Map;
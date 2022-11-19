import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { key } from '../services/googleApi';

/* const markers=[{
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
              }] */

const AnyReactComponent = ({ text }) => (
    <div style={{
        width: '50vw',
        height: '100vh',
        position: 'relative'
    }}>
        {text}
    </div>
);

class SimpleMap extends React.Component {
    static defaultProps = {
        center: { lat: 59.95, lng: 30.33 },
        zoom: 11
    };

    render() {
        return (
            <GoogleMapReact
            style={{
                width: '100%',
                height: '100vh'
            }}
                bootstrapURLKeys={{ key: 'AIzaSyDV9ulzKnNWo6-e0LYKJCi4KiWOVWkrMYQ' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={'Kreyser'}
                />
            </GoogleMapReact>
        );
    }
};

export default SimpleMap;
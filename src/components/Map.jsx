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
        color: 'white',
        background: '#49A078',
        padding: '20px 20px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        border: '3px solid white',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);

class SimpleMap extends React.Component {
    static defaultProps = {
        center: { lat: -34.81, lng: -58.53 },
        zoom: 12
    };

    render() {
        return (
            <GoogleMapReact
            style={{
                width: '100%',
                height: '100vh',
                position: 'relative'
            }}
                bootstrapURLKeys={{ key: 'AIzaSyDV9ulzKnNWo6-e0LYKJCi4KiWOVWkrMYQ' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={-34.8562058}
                    lng={-58.528218}
                    text={'Sucursal Ezeiza'}
                />
                <AnyReactComponent
                    lat={-34.8973153}
                    lng={-58.5614977}
                    text={'Sucursal T. Suarez'}
                />
                <AnyReactComponent
                    lat={-34.8165856}
                    lng={-58.4709606}
                    text={'Sucursal Monte Grande'}
                />
                <AnyReactComponent
                    lat={-34.7474652}
                    lng={-58.4735734}
                    text={'Sucursal Lomas de Zamora'}
                />
                <AnyReactComponent
                    lat={-34.8318137}
                    lng={-58.4928572}
                    text={'Sucursal El Jagüel'}
                />
            </GoogleMapReact>
        );
    }
};

export default SimpleMap;
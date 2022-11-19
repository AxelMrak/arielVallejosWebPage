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
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
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
                bootstrapURLKeys={{ key: 'AIzaSyDV9ulzKnNWo6 - e0LYKJCi4KiWOVWkrMYQ' }}
                key='AIzaSyCnN9pqQhVRvYu-NvrfSpYowDXIdy1m_e8'
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={'Kreyser Avrora'}
                />
            </GoogleMapReact>
        );
    }
};

export default SimpleMap;
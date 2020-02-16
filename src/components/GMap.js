import React from 'react'
import GoogleMapReact from 'google-map-react';

const isClient = typeof window !== 'undefined';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GMap = ({zoom, center}) => {
  return (
    <section className="google-map">
      <div className="map">
        { isClient && (
          <div style={{ height: '70vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyB4wBtlQ2YEd-QigAYsJOpcASvqt05QMII" }}
              defaultCenter={center}
              defaultZoom={zoom}
            >
              <AnyReactComponent
                lat={14.0738976}
                lng={-87.1585019}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        )}
      </div>
    </section>
  );
}

export default GMap
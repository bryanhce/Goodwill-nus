import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

import "./Map.css";

const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 1.3062703, lng: 103.771012 }} //nus utwon
    >
      {/* dummy data */}
      <Marker key={0} position={{ lat: 1.3052017, lng: 103.7717158 }} />
      {/* utr */}

      <Marker key={props.helpRequests[0].requestId} position={props.helpRequests[0].location} />

    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const CompleteMap = (props) => {
  return (
    <div className="completeMap__border">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        helpRequests={props.helpRequests}
      />
    </div>
  );
};

export default CompleteMap;

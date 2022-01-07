import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

import "./Map.css";

const Map = (props) => {
  const [selectedRequest, setSelectedRequest] = useState(null);

  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 1.3062703, lng: 103.771012 }} //nus utwon
    >
      {props.helpRequests.map((request) => (
        <Marker
          key={request.requestId}
          position={request.location}
          onClick={() => {
            setSelectedRequest(request);
          }}
        />
      ))}
      {selectedRequest && (
        <InfoWindow
          position={selectedRequest.location}
          onCloseClick={() => {
            setSelectedRequest(null);
          }}
        >
          <div>
            <h2>{selectedRequest.title}</h2>
            <h3>Time needed: {selectedRequest.timeNeeded}</h3>
            <p>{selectedRequest.description}</p>
          </div>
        </InfoWindow>
      )}
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

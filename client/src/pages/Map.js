import React, { useState, useEffect } from 'react';
import { 
  GoogleMap, 
  withScriptjs, 
  withGoogleMap, 
  Marker,
  InfoWindow
} from 'react-google-maps';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_USERS } from '../utils/queries';

function Map() {
  const { data } = useQuery(QUERY_ALL_USERS);
  const users = data.users;
  
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <GoogleMap
      defaultZoom={10} 
      defaultCenter={{ lat: 27.87986, lng: -82.75092 }}
    >
      {users.map((user) => (
        <Marker 
          key={user._id} 
          position={{ lat: Number(user.latitude), lng: Number(user.longitude) }} 
          onClick={() => {
            setSelectedUser(user);
          }} 
        >
        {selectedUser && (
          <InfoWindow
            postition={{
              lat: selectedUser.latitude,
              lng: selectedUser.longitude
            }}
            onCloseClick={() => {
              setSelectedUser(null);
            }}
          >
            <div>
              <h2>{`${selectedUser.firstName} ${selectedUser.lastName}`}</h2>
            </div>
          </InfoWindow>
        )}
        </Marker>
      ))}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function SetMap () {
  return (
    <div style={{ width: '100vw', height: '100vh'}}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,place&key=AIzaSyBGjt8MdI_N4adowcL8ig1YcWWSkzGm3Tg`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}
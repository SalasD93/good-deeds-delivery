import React, { useState } from 'react';
import { 
  GoogleMap, 
  withScriptjs, 
  withGoogleMap, 
  Marker 
} from 'react-google-maps';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';


function Map() {
  const { data } = useQuery(QUERY_USER);
  const userData = data.user;
  const [users, setUsers] = useState([userData]);
  console.log(users);
  return (
    <GoogleMap
      defaultZoom={10} 
      defaultCenter={{ lat: 27.88, lng: -82.8 }}
    >
      {users.map((user) => (
        <Marker key={user._id} position={{lat: Number(user.latitude), lng: Number(user.longitude)}} />
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
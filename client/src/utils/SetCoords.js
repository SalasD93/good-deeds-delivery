import { useQuery } from '@apollo/client';
import { QUERY_USER } from './queries';

const SetCoords = (e) => {
  e.preventDefault();
  console.log('function started');
  const { data } = useQuery(QUERY_USER);
  let users;
  
  if (data) {
    users = data.user;
  }
  
  for (let i = 0; i < users.length; i++) {
    if(users.zipCode) {
      const zipCode = users.zipCode;
      const response = fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=AIzaSyBGjt8MdI_N4adowcL8ig1YcWWSkzGm3Tg`);
  
      const latitude = response.data.results[0].geometry.location.lat;
      const longitude = response.data.results[0].geometry.location.lng;
      console.log(latitude, longitude);
  
      if (response) {
        fetch(`/user`, {
          method: 'POST',
          body: JSON.stringify({
              latitude,
              longitude
          }),
          headers: {
              'Content-Type': 'application/json'
          }
        })
      }
    }
  }
}

export default SetCoords;
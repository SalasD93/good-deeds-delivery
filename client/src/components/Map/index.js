import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { GetMap } from '../../pages/GetMap';

const Map = () => {
    // const [markers, setMarkers] = useState([]);
    GetMap();
    return (
        <div>
            <div>
                <div>
                    <div>
                        <div id="map"></div>
                    </div>
                </div>
            </div>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGjt8MdI_N4adowcL8ig1YcWWSkzGm3Tg&callback=initMap&v=weekly" async></script>
        </div>
    )
}

export default Map;
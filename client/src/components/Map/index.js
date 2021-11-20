import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const Map = () => {
    // const [markers, setMarkers] = useState([]);

    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
    }

    // This function uses the google geocode API to convert postal code to coordinates
    async function getCoordinates(event) {
        event.preventDefault();
        const zipCode = user.zipCode;
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=AIzaSyBGjt8MdI_N4adowcL8ig1YcWWSkzGm3Tg`);
        const convertedZip = await response.json();

        const latitude = convertedZip.results[0].geometry.location.lat;
        const longitude = convertedZip.results[0].geometry.location.lng;
        const zIndex = Math.floor(Math.random() * 5) + 1;

        return initMap(latitude, longitude);
    };

    // This function gets the coordinates based off geolocation confirmed by the user when they click on 'Deliver' tab
    async function getLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(async function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const zIndex = Math.floor(Math.random() * 5) + 1;
                return initMap(latitude, longitude);
            });
        } else {
            console.log('geolocation not available');
        }
    };

    function initMap(latitude, longitude) {
        // Use to set the center of the map to the current user's location
        let currentUser = {};
        if (latitude == null || latitude == '' || latitude == undefined) {
        currentUser = { lat: 27.88, lng: -82.8 };
        } else {
        currentUser = { lat: Number(latitude), lng: Number(longitude) };
        }

        const map = new google.maps.Map(document.getElementById("map"), {
            // This sets the zoom distance in the map
            zoom: 10,
            // This sets the center of the map for the current location being searched
            center: currentUser,
        });
        // This calls for the markers to be created and placed on the map after the map has been created
        setMarkers(map);
    };

    // dummy data for books is generated to the map by taking users current location and incrementing by 1

    // This creates the markers for the map
    async function setMarkers(map) {
        // Adds markers to the map.
        const image = {
            // Image for the marker
            url: "../img/BookHeartPin2.png",
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(20, 32),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 32),
        };
        // Shapes define the clickable region of the icon.
        const shape = {
            coords: [1, 1, 1, 20, 18, 20, 18, 1],
            type: "poly",
        };
        // Creates random zIndex for marker
        const zIndex = Math.floor(Math.random() * 5) + 1;
        // Iterates through all the users and displays the ones local to center
        for (let i = 0; i < user.length; i++) {
            const users = user[i];
            if (user.zipCode) {
                const zipCode = user.zipCode;
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=AIzaSyBGjt8MdI_N4adowcL8ig1YcWWSkzGm3Tg`);
                const convertedZip = await response.json();

                const userLat = convertedZip.results[0].geometry.location.lat;
                const userLat = convertedZip.results[0].geometry.location.lng;

                const marker = new google.maps.Marker({
                    position: { lat: userLat, lng: userLng },
                    map,
                    icon: image,
                    shape: shape,
                    title: users[5],
                    zIndex: zIndex
                });
                // Add a click listener for each marker
                marker.addListener("click", () => {
                    // Need to add user info to markers
                });
            }
        }
    };

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
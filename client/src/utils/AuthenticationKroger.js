import config from '../config/config';

// Authorization code redirect initiated by 'login' event from Sign In button
function redirectToLogin(e) {
    e.preventDefault();
    const scope = encodeURIComponent('product.compact cart.basic:write');
    const url =
        `${config.oauth2BaseUrl}/authorize?` +
        `client_id=${encodeURIComponent(config.clientId)}` +
        `&redirect_uri=${encodeURIComponent(config.redirectUrl)}` +
        `&response_type=code` +
        `&scope=${scope}`;
    window.location = url;
}

// Handle the call back from authorization server
// function handleCallback() {
//     const accessToken = cookies.get('accToken');
//     const refreshToken = cookies.get('refToken');

//     if (!accessToken) {
//         return false;
//     }
//     // Store tokens client side for API requests
//     storeTokens(accessToken, refreshToken);

//     cookies.remove('accToken');
//     cookies.remove('refToken');

//     return true;
// }

export default redirectToLogin;
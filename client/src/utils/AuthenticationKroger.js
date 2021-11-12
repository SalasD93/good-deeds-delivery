import config from '../config/config';

// Authorization code redirect initiated by 'login' event from Sign In button
function redirectToLogin() {
    // Scopes needed for application
    const scope = encodeURIComponent('product.compact cart.basic:write');

    const url =
        `${config.oauth2BaseUrl}/authorize?` +
        `&scope=${scope}` +
        `&response_type=code` +
        `&client_id=${encodeURIComponent(config.clientId)}` +
        `&redirect_uri=${encodeURIComponent(config.redirectUrl)}`;

    window.location = url;
}

export default redirectToLogin;
import config from '../config/config';

// Authorization code redirect initiated by 'login' event from Sign In button
function redirectToLogin() {
    // Scopes needed for application
    const scope = encodeURIComponent('product.personalized cart.basic:rw profile.full');

    const url =
        `${config.oauth2BaseUrl}/authorize?` +
        `client_id=${encodeURIComponent(config.clientId)}` +
        `&redirect_uri=${encodeURIComponent(config.redirectUrl)}` +
        `&response_type=code` +
        `&scope=${scope}`;

    window.location = url;
}

export default redirectToLogin;
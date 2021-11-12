require('dotenv').config();

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
const oauth2BaseUrl = process.env.REACT_APP_OAUTH_BASE_URL;
const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUrl = process.env.REACT_APP_REDIRECT_URL || 'https://good-deeds-delivery.herokuapp.com/';

export default { apiBaseUrl, oauth2BaseUrl, clientId, redirectUrl };
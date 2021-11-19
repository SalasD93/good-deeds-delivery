require('dotenv').config();

const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUrl = process.env.REACT_APP_REDIRECT_URL;

async function getByAuth(code) {
  const body = `grant_type=authorization_code&code=${encodeURIComponent(
    code
  )}&redirect_uri=${encodeURIComponent(redirectUrl)}`;
  return await get(body);
}

async function getByRefresh(refreshToken) {
  const body =
    `grant_type=refresh_token&` +
    `refresh_token=${encodeURIComponent(refreshToken)}`;
  return await get(body);
}

async function get(body) {
  // ClientId and ClientSecret (stored in .env file)
  const encoded = buffer.Buffer.from(`${clientId}:${clientSecret}`, `ascii`);
  // ClientId and clientSecret must be encoded
  const authorization = "Basic " + encoded.toString("base64");
  // Base URL (https://api.kroger.com/v1/connect/oauth2)
  // Version/Endpoint (/v1/token)
  const tokenUrl = `${process.env.REACT_APP_OAUTH2_BASE_URL}/token`;

  // token request
  let tokenResponse = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "User-Agent": "",
      Authorization: authorization,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body
  });
  // Handle response
  if (tokenResponse.status >= 400) {
    console.log(`tokenResponse error: ${tokenResponse.status}`);
    throw new Error(`tokenResponse failed with status ${tokenResponse.status}`);
  }
  // Return json object
  return await tokenResponse.json();
}
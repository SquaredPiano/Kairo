import { CONFIG } from './config';

// OAuth Configuration for Quercus/Canvas LMS
export const OAUTH_CONFIG = {
  ...CONFIG.OAUTH,
  
  // OAuth endpoints
  AUTHORIZE_URL: '/oauth/authorize',
  TOKEN_URL: '/oauth/token',
  USER_INFO_URL: '/api/v1/users/self'
};

// Generate OAuth authorization URL
export function generateAuthUrl(state) {
  const params = new URLSearchParams({
    client_id: OAUTH_CONFIG.CLIENT_ID,
    redirect_uri: OAUTH_CONFIG.REDIRECT_URI,
    response_type: 'code',
    scope: OAUTH_CONFIG.SCOPES,
    state: state
  });
  
  return `${OAUTH_CONFIG.QUERCUS_BASE_URL}${OAUTH_CONFIG.AUTHORIZE_URL}?${params.toString()}`;
}

// Generate a random state parameter for CSRF protection
export function generateState() {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

// Exchange authorization code for access token
export async function exchangeCodeForToken(code) {
  const response = await fetch(`${OAUTH_CONFIG.QUERCUS_BASE_URL}${OAUTH_CONFIG.TOKEN_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: OAUTH_CONFIG.REDIRECT_URI,
      client_id: OAUTH_CONFIG.CLIENT_ID,
      client_secret: OAUTH_CONFIG.CLIENT_SECRET
    })
  });
  
  if (!response.ok) {
    throw new Error(`Token exchange failed: ${response.statusText}`);
  }
  
  return await response.json();
}

// Get user information using access token
export async function getUserInfo(accessToken) {
  const response = await fetch(`${OAUTH_CONFIG.QUERCUS_BASE_URL}${OAUTH_CONFIG.USER_INFO_URL}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to get user info: ${response.statusText}`);
  }
  
  return await response.json();
}

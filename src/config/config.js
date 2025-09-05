// Application Configuration
export const CONFIG = {
  // OAuth Configuration
  OAUTH: {
    // These should be set via environment variables in production
    // For now, using hardcoded values since process.env is not available in renderer
    CLIENT_ID: 'your_client_id_here',
    CLIENT_SECRET: 'your_client_secret_here',
    REDIRECT_URI: 'http://localhost:3000/auth/callback',
    QUERCUS_BASE_URL: 'https://quercus.utoronto.ca',
    SCOPES: 'user:read,account:read,courses:read,assignments:read,submissions:read'
  },
  
  // App Configuration
  APP: {
    NAME: 'Kairo',
    VERSION: '1.0.0',
    DESCRIPTION: 'AI Study Companion'
  }
};

// Instructions for setting up OAuth
export const OAUTH_SETUP_INSTRUCTIONS = `
To set up Quercus OAuth integration:

1. Go to your Quercus instance (e.g., https://quercus.utoronto.ca)
2. Navigate to Account > Settings > Approved Integrations
3. Click "New Access Token" or "Developer Keys"
4. Create a new OAuth application with:
   - Name: Kairo AI Study Companion
   - Redirect URI: http://localhost:3000/auth/callback
   - Scopes: user:read, account:read, courses:read, assignments:read, submissions:read
5. Copy the Client ID and Client Secret
6. Update the CONFIG.OAUTH values in this file with your credentials

Note: In production, these should be environment variables, not hardcoded values.
`;

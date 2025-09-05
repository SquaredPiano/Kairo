# Quercus OAuth Integration Setup

This guide explains how to set up Quercus OAuth integration for the Kairo AI Study Companion.

## Overview

The app now includes a complete OAuth 2.0 flow for authenticating with Quercus (Canvas LMS). When users click "Sign In", they'll be redirected to Quercus to authorize the app, and then redirected back with access to their account.

## Features Implemented

✅ **Sign In Button**: Updated landing page with functional sign-in button  
✅ **OAuth Flow**: Complete OAuth 2.0 authorization code flow  
✅ **Sign In Page**: Dedicated page with Quercus integration  
✅ **User Management**: User profile display and sign-out functionality  
✅ **State Management**: Persistent authentication state  
✅ **Demo Mode**: Fallback option for testing without OAuth setup  

## Setup Instructions

### 1. Register OAuth Application with Quercus

1. Go to your Quercus instance (e.g., `https://quercus.utoronto.ca`)
2. Navigate to **Account** → **Settings** → **Approved Integrations**
3. Click **"New Access Token"** or **"Developer Keys"**
4. Create a new OAuth application with these settings:
   - **Name**: `Kairo AI Study Companion`
   - **Redirect URI**: `http://localhost:3000/auth/callback`
   - **Scopes**: 
     - `user:read`
     - `account:read` 
     - `courses:read`
     - `assignments:read`
     - `submissions:read`

### 2. Configure OAuth Credentials

Update the OAuth configuration in `/src/config/config.js`:

```javascript
export const CONFIG = {
  OAUTH: {
    CLIENT_ID: 'your_actual_client_id_here',
    CLIENT_SECRET: 'your_actual_client_secret_here',
    REDIRECT_URI: 'http://localhost:3000/auth/callback',
    QUERCUS_BASE_URL: 'https://quercus.utoronto.ca',
    SCOPES: 'user:read,account:read,courses:read,assignments:read,submissions:read'
  }
};
```

### 3. Test the Integration

1. Start the app: `npm start`
2. Click **"Sign In"** on the landing page
3. Click **"Sign in with Quercus"** on the sign-in page
4. The app will open your default browser to Quercus
5. Authorize the application
6. You'll be redirected back to the app with access

## File Structure

```
src/
├── config/
│   ├── config.js          # Main configuration
│   └── oauth.js           # OAuth utilities
├── app/
│   ├── components/
│   │   ├── SignInPage.jsx     # Sign-in page with OAuth
│   │   ├── OAuthCallback.jsx  # OAuth callback handler
│   │   ├── LandingPage.jsx    # Updated with sign-in button
│   │   └── Header.jsx         # Updated with user profile
│   └── app.jsx            # Updated with auth flow
├── main.js                # Electron main process (OAuth handlers)
└── preload.js             # Electron preload (OAuth APIs)
```

## OAuth Flow

1. **User clicks "Sign In"** → Redirects to sign-in page
2. **User clicks "Sign in with Quercus"** → Opens Quercus in browser
3. **User authorizes app** → Quercus redirects with authorization code
4. **App exchanges code for token** → Gets access token from Quercus
5. **App fetches user info** → Gets user profile data
6. **User is signed in** → Redirected to main app with full access

## Security Features

- **CSRF Protection**: State parameter validation
- **Secure Token Storage**: Tokens stored in localStorage (consider upgrading to secure storage)
- **Error Handling**: Comprehensive error handling and user feedback
- **Token Refresh**: Support for token refresh (implement as needed)

## Demo Mode

For testing without OAuth setup, use the **"Try Demo Mode"** button on the sign-in page. This creates a mock user for development and testing.

## Next Steps

1. **Set up OAuth credentials** following the instructions above
2. **Test the complete flow** with your Quercus account
3. **Customize scopes** based on your app's needs
4. **Implement token refresh** for long-lived sessions
5. **Add error recovery** for network issues

## Troubleshooting

- **"Invalid client"**: Check your CLIENT_ID and CLIENT_SECRET
- **"Invalid redirect URI"**: Ensure the redirect URI matches exactly
- **"Access denied"**: User may have denied permission or scope issues
- **Network errors**: Check your Quercus instance URL and network connectivity

## Production Considerations

- Use environment variables for sensitive credentials
- Implement proper token refresh logic
- Add secure token storage (not localStorage)
- Set up proper error monitoring
- Configure production redirect URIs

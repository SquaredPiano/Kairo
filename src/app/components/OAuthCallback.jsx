import React, { useEffect, useState } from 'react';
import { exchangeCodeForToken, getUserInfo } from '../../config/oauth';

function OAuthCallback({ onSuccess, onError }) {
  const [status, setStatus] = useState('processing');
  const [message, setMessage] = useState('Processing authentication...');

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');
        const error = urlParams.get('error');

        if (error) {
          throw new Error(`OAuth error: ${error}`);
        }

        if (!code) {
          throw new Error('No authorization code received');
        }

        // Verify state parameter
        const storedState = localStorage.getItem('oauth_state');
        if (state !== storedState) {
          throw new Error('Invalid state parameter - possible CSRF attack');
        }

        setMessage('Exchanging authorization code for access token...');
        
        // Exchange code for token
        const tokenData = await exchangeCodeForToken(code);
        
        setMessage('Fetching user information...');
        
        // Get user information
        const userInfo = await getUserInfo(tokenData.access_token);
        
        // Store authentication data
        localStorage.setItem('access_token', tokenData.access_token);
        localStorage.setItem('refresh_token', tokenData.refresh_token);
        localStorage.setItem('token_expires_at', Date.now() + (tokenData.expires_in * 1000));
        localStorage.setItem('user', JSON.stringify(userInfo));
        localStorage.setItem('isAuthenticated', 'true');
        
        // Clean up
        localStorage.removeItem('oauth_state');
        
        setStatus('success');
        setMessage('Authentication successful! Redirecting...');
        
        // Notify parent component
        setTimeout(() => {
          onSuccess(userInfo);
        }, 1500);
        
      } catch (err) {
        console.error('OAuth callback error:', err);
        setStatus('error');
        setMessage(err.message || 'Authentication failed');
        
        // Clean up
        localStorage.removeItem('oauth_state');
        
        setTimeout(() => {
          onError(err);
        }, 2000);
      }
    };

    handleCallback();
  }, [onSuccess, onError]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-amber-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 text-center">
          {/* Logo */}
          <div className="relative inline-block mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-slate-700 rounded-2xl transform rotate-12 shadow-lg mx-auto">
              <div className="absolute inset-2 bg-gradient-to-br from-emerald-400 to-slate-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">K</span>
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full"></div>
          </div>

          {/* Status */}
          <div className="space-y-4">
            {status === 'processing' && (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
              </div>
            )}
            
            {status === 'success' && (
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <i data-lucide="check" className="w-5 h-5 text-green-600"></i>
                </div>
              </div>
            )}
            
            {status === 'error' && (
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <i data-lucide="x" className="w-5 h-5 text-red-600"></i>
                </div>
              </div>
            )}

            <h2 className="text-2xl font-bold text-slate-800">
              {status === 'processing' && 'Authenticating...'}
              {status === 'success' && 'Success!'}
              {status === 'error' && 'Authentication Failed'}
            </h2>
            
            <p className="text-slate-600">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OAuthCallback;

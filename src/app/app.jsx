import React, { useEffect, useState } from 'react';
import '../styles.css';
import LandingPage from './components/LandingPage';
import SignInPage from './components/SignInPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';

function App() {
  console.log('App component rendering');
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'signin', or 'app'
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log('App useEffect running');
    if (window.lucide) window.lucide.createIcons();
    
    // Check if user is already authenticated
    const storedUser = localStorage.getItem('user');
    const storedAuth = localStorage.getItem('isAuthenticated');
    
    if (storedUser && storedAuth === 'true') {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
      setCurrentView('app');
    }
  }, []);

  const handleSignInClick = () => {
    setCurrentView('signin');
  };

  const handleSignInSuccess = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    setCurrentView('app');
  };

  const handleSignOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    setUser(null);
    setIsAuthenticated(false);
    setCurrentView('landing');
  };

  if (currentView === 'landing') {
    return <LandingPage onLaunchApp={() => setCurrentView('app')} onSignIn={handleSignInClick} />;
  }

  if (currentView === 'signin') {
    return <SignInPage onSignInSuccess={handleSignInSuccess} onBackToLanding={() => setCurrentView('landing')} />;
  }

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-50 via-emerald-50 to-amber-50">
      <Header onBackToLanding={() => setCurrentView('landing')} onSignOut={handleSignOut} user={user} />
      <div className="flex-1 flex">
        <Sidebar />
        <Canvas />
      </div>
    </div>
  );
}

export default App;

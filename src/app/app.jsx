import React, { useEffect } from 'react';
import '../styles.css';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';

export default function App() {
  const [currentView, setCurrentView] = React.useState('landing'); // 'landing' or 'app'

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);

  if (currentView === 'landing') {
    return <LandingPage onLaunchApp={() => setCurrentView('app')} />;
  }

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-50 via-emerald-50 to-amber-50">
      <Header onBackToLanding={() => setCurrentView('landing')} />
      <div className="flex-1 flex">
        <Sidebar />
        <Canvas />
      </div>
    </div>
  );
}

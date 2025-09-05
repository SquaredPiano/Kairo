import React, { useEffect } from 'react';

function Header({ onBackToLanding, onSignOut, user }) {
  useEffect(() => {
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }, []);

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onBackToLanding}
              className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center transition-all duration-200 group"
              title="Back to Home"
            >
              <i data-lucide="arrow-left" className="w-5 h-5 text-slate-600 group-hover:text-emerald-600"></i>
            </button>
            
            {/* Modern logo */}
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-slate-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full"></div>
            </div>
            
            <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-emerald-700 bg-clip-text text-transparent">
              Kairo
            </h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold px-4 py-2 rounded-xl hover:bg-slate-100">
              File
            </button>
            <button className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold px-4 py-2 rounded-xl hover:bg-slate-100">
              Edit
            </button>
            <button className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold px-4 py-2 rounded-xl hover:bg-slate-100">
              View
            </button>
            <button className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold px-4 py-2 rounded-xl hover:bg-slate-100">
              Help
            </button>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center transition-all duration-200 group">
              <i data-lucide="settings" className="w-5 h-5 text-slate-600 group-hover:text-emerald-600"></i>
            </button>
            
            {/* User Profile */}
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-slate-50 rounded-xl px-3 py-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-slate-700">{user.name}</span>
                </div>
                <button 
                  onClick={onSignOut}
                  className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center transition-all duration-200 group"
                  title="Sign Out"
                >
                  <i data-lucide="log-out" className="w-5 h-5 text-slate-600 group-hover:text-red-600"></i>
                </button>
              </div>
            ) : (
              <button className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center transition-all duration-200 group">
                <i data-lucide="user" className="w-5 h-5 text-slate-600 group-hover:text-emerald-600"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

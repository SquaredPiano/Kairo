import React from 'react';

function LandingPage({ onLaunchApp, onSignIn }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-amber-50">
      {/* Innovative Header with Organic Shapes */}
      <header className="relative overflow-hidden">
        {/* Background organic shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-slate-200/40 to-emerald-200/40 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-8">
            <div className="flex items-center space-x-6">
              {/* Innovative Logo with organic shape */}
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-slate-700 rounded-2xl transform rotate-12 shadow-lg">
                  <div className="absolute inset-2 bg-gradient-to-br from-emerald-400 to-slate-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">K</span>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-emerald-700 bg-clip-text text-transparent">
                  Kairo
                </h1>
                <p className="text-slate-600 font-medium">AI Study Companion</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <button 
                onClick={onSignIn}
                className="text-slate-600 hover:text-slate-900 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-slate-100 rounded-xl"
              >
                Sign In
              </button>
              <button 
                onClick={onLaunchApp}
                className="bg-gradient-to-r from-emerald-600 to-slate-700 text-white px-8 py-3 rounded-2xl text-sm font-bold hover:shadow-xl hover:scale-105 transition-all duration-200 transform"
              >
                Launch App
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Unconventional Main Content - Asymmetrical Layout */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section with Dynamic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h2 className="text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-800 via-emerald-700 to-amber-600 bg-clip-text text-transparent">
                  Transform
                </span>
                <br />
                <span className="text-slate-700">Your Learning</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Drop AI agents onto your study materials. Generate notes, flashcards, and quizzes instantly. 
                The future of education is here.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onLaunchApp}
                className="bg-gradient-to-r from-emerald-600 to-slate-700 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-200 transform"
              >
                Start Learning
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-50 hover:border-emerald-400 transition-all duration-200">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Column - Interactive Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Floating Cards with Organic Shapes */}
              <div className="absolute -top-8 -right-4 w-32 h-32 bg-gradient-to-br from-emerald-200 to-amber-200 rounded-3xl transform rotate-12 shadow-lg"></div>
              <div className="absolute top-16 -left-8 w-24 h-24 bg-gradient-to-br from-slate-200 to-emerald-200 rounded-2xl transform -rotate-6 shadow-md"></div>
              <div className="absolute -bottom-4 right-8 w-20 h-20 bg-gradient-to-br from-amber-200 to-slate-200 rounded-xl transform rotate-45 shadow-md"></div>
              
              {/* Main Card */}
              <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-white text-2xl">🧠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-center text-slate-800">AI-Powered Learning</h3>
                  <p className="text-slate-600 text-center">Drop agents, get results</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid - Unconventional Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {/* Feature 1 - Large Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-emerald-50 to-slate-50 rounded-3xl p-8 border border-emerald-200/50 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-slate-600 rounded-2xl flex items-center justify-center">
                <span className="text-white text-xl">📚</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Smart Material Processing</h3>
                <p className="text-slate-600 leading-relaxed">
                  Upload PDFs, slides, and videos. Our AI agents automatically extract key concepts, 
                  create summaries, and generate interactive content.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-amber-50 to-slate-50 rounded-3xl p-6 border border-amber-200/50 hover:shadow-xl transition-all duration-300">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-slate-600 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-lg">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Instant Generation</h3>
            <p className="text-slate-600 text-sm">Create notes, flashcards, and quizzes in seconds</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-3xl p-6 border border-slate-200/50 hover:shadow-xl transition-all duration-300">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-lg">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Personalized Learning</h3>
            <p className="text-slate-600 text-sm">Adapts to your learning style and pace</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-3xl p-6 border border-emerald-200/50 hover:shadow-xl transition-all duration-300">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-amber-600 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-lg">🔄</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Interactive Workflow</h3>
            <p className="text-slate-600 text-sm">Drag, drop, and collaborate with AI agents</p>
          </div>
        </div>

        {/* CTA Section with Organic Background */}
        <div className="relative bg-gradient-to-r from-slate-800 via-emerald-700 to-amber-600 rounded-3xl p-12 text-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Learning?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already using AI to accelerate their education.
            </p>
            <button 
              onClick={onLaunchApp}
              className="bg-white text-slate-800 px-10 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-200 transform"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;

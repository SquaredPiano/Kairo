import React from 'react';

function Canvas() {
  return (
    <div className="flex-1 bg-gradient-to-br from-slate-50 via-emerald-50 to-amber-50 relative overflow-hidden">
      {/* Canvas toolbar with modern design */}
      <div className="absolute top-6 left-6 right-6 z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button className="p-3 hover:bg-slate-100 rounded-xl transition-all duration-200 group">
              <i data-lucide="zoom-in" className="w-5 h-5 text-slate-600 group-hover:text-emerald-600"></i>
            </button>
            <button className="p-3 hover:bg-slate-100 rounded-xl transition-all duration-200 group">
              <i data-lucide="zoom-out" className="w-5 h-5 text-slate-600 group-hover:text-emerald-600"></i>
            </button>
            <div className="w-px h-8 bg-slate-300 mx-2"></div>
            <button className="p-3 hover:bg-slate-100 rounded-xl transition-all duration-200 group">
              <i data-lucide="move" className="w-5 h-5 text-slate-600 group-hover:text-emerald-600"></i>
            </button>
            <button className="p-3 hover:bg-slate-100 rounded-xl transition-all duration-200 group">
              <i data-lucide="hand" className="w-5 h-5 text-slate-600 group-hover:text-emerald-600"></i>
            </button>
          </div>
          <div className="text-sm text-slate-500 font-medium">
            Drag AI agents here to process your materials
          </div>
        </div>
      </div>
      
      {/* Canvas area with innovative design */}
      <div className="h-full flex items-center justify-center p-12">
        <div className="text-center max-w-2xl">
          {/* Organic background shapes */}
          <div className="relative mb-8">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-amber-200/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-slate-200/30 to-emerald-200/30 rounded-full blur-2xl"></div>
            
            {/* Main drop zone */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-dashed border-slate-300 p-16 hover:border-emerald-400 hover:bg-emerald-50/50 transition-all duration-300 group">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="plus" className="w-12 h-12 text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Drop Files or AI Agents Here</h3>
              <p className="text-slate-600 mb-6">Upload your study materials and drag AI agents to start processing</p>
              
              {/* Quick action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="bg-gradient-to-r from-emerald-600 to-slate-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                  Upload Files
                </button>
                <button className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-200">
                  Browse Templates
                </button>
              </div>
            </div>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-slate-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📝</span>
              </div>
              <h4 className="font-bold text-slate-800 mb-2">Smart Notes</h4>
              <p className="text-sm text-slate-600">AI-generated summaries and key points</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-slate-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h4 className="font-bold text-slate-800 mb-2">Flashcards</h4>
              <p className="text-sm text-slate-600">Interactive study cards for memorization</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">❓</span>
              </div>
              <h4 className="font-bold text-slate-800 mb-2">Quizzes</h4>
              <p className="text-sm text-slate-600">Test your knowledge with AI-generated questions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Canvas;

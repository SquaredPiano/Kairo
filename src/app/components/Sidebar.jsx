import React from 'react';

function Sidebar() {
  const tools = [
    { icon: "layout", name: "Canvas", active: true },
    { icon: "file-text", name: "Notes", active: false },
    { icon: "credit-card", name: "Flashcards", active: false },
    { icon: "help-circle", name: "Quiz", active: false },
    { icon: "presentation", name: "Slides", active: false },
    { icon: "message-circle", name: "Chat", active: false }
  ];

  return (
    <div className="w-72 bg-white/90 backdrop-blur-sm border-r border-slate-200 flex flex-col">
      {/* Tools section with modern design */}
      <div className="p-6 border-b border-slate-200">
        <h3 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider">Tools</h3>
        <div className="space-y-2">
          {tools.map((tool) => (
            <button
              key={tool.name}
              className={`w-full flex items-center px-4 py-3 text-sm rounded-xl transition-all duration-200 ${
                tool.active
                  ? 'bg-gradient-to-r from-emerald-50 to-slate-50 text-emerald-700 border border-emerald-200 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <i data-lucide={tool.icon} className="w-5 h-5 mr-3"></i>
              <span className="font-semibold">{tool.name}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Recent files with modern styling */}
      <div className="p-6 border-b border-slate-200">
        <h3 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider">Recent Files</h3>
        <div className="space-y-2">
          <div className="flex items-center px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 rounded-xl cursor-pointer transition-all duration-200 group">
            <i data-lucide="file-text" className="w-5 h-5 mr-3 text-slate-400 group-hover:text-emerald-500"></i>
            <span className="truncate font-medium">Biology Lecture 1.pdf</span>
          </div>
          <div className="flex items-center px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 rounded-xl cursor-pointer transition-all duration-200 group">
            <i data-lucide="presentation" className="w-5 h-5 mr-3 text-slate-400 group-hover:text-emerald-500"></i>
            <span className="truncate font-medium">Chemistry Slides.pptx</span>
          </div>
          <div className="flex items-center px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 rounded-xl cursor-pointer transition-all duration-200 group">
            <i data-lucide="video" className="w-5 h-5 mr-3 text-slate-400 group-hover:text-emerald-500"></i>
            <span className="truncate font-medium">Math Tutorial.mp4</span>
          </div>
        </div>
      </div>
      
      {/* AI Agents with modern cards */}
      <div className="p-6 flex-1">
        <h3 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider">AI Agents</h3>
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-emerald-50 to-slate-50 border border-emerald-200 rounded-2xl p-4 hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-emerald-700">Note Generator</span>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                <span className="text-xs text-emerald-600 font-semibold">Ready</span>
              </div>
            </div>
            <p className="text-xs text-emerald-600">Ready to process your materials</p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-50 to-amber-50 border border-slate-200 rounded-2xl p-4 hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-slate-700">Quiz Creator</span>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                <span className="text-xs text-amber-600 font-semibold">Ready</span>
              </div>
            </div>
            <p className="text-xs text-slate-600">Drag to canvas to activate</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-slate-50 border border-amber-200 rounded-2xl p-4 hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-amber-700">Flashcard Maker</span>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs text-amber-600 font-semibold">Processing</span>
              </div>
            </div>
            <p className="text-xs text-amber-600">Creating flashcards...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

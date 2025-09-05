const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('kairoAPI', {
  // Course management
  getCourses: () => ipcRenderer.invoke('get-courses'),
  addCourse: (courseData) => ipcRenderer.invoke('add-course', courseData),
  
  // Material management
  getMaterials: (moduleId) => ipcRenderer.invoke('get-materials', moduleId),
  addMaterial: (materialData) => ipcRenderer.invoke('add-material', materialData),
  
  // Output management
  generateOutput: (materialId, agentType) => 
    ipcRenderer.invoke('generate-output', materialId, agentType),
  getOutputs: (materialId) => ipcRenderer.invoke('get-outputs', materialId)
});

// OAuth API
contextBridge.exposeInMainWorld('electronAPI', {
  openExternal: (url) => ipcRenderer.invoke('open-external-url', url),
  oauthCallback: (code, state) => ipcRenderer.invoke('oauth-callback', code, state)
});
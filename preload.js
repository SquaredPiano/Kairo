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
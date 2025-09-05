const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const db = require('./src/db'); // Import database

// Import query modules
const courseQueries = require('./src/db/queries/courses');
const materialQueries = require('./src/db/queries/materials');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false
    }
  });

  win.loadFile(path.join(__dirname, 'dist/index.html'));
}

// IPC handlers for database operations
ipcMain.handle('get-courses', () => {
  return courseQueries.getAllCourses(db);
});

ipcMain.handle('add-course', (event, courseData) => {
  return courseQueries.insertCourse(db, courseData);
});

ipcMain.handle('get-materials', (event, moduleId) => {
  return materialQueries.getMaterialsByModule(db, moduleId);
});

// Add more handlers as needed

app.whenReady().then(createWindow);

// Standard Electron app event handlers...
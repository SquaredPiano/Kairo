const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const initializeDatabase = require('./src/db'); // Import database initialization function

// Import query modules
const courseQueries = require('./src/db/queries/courses');
const materialQueries = require('./src/db/queries/materials');

let db; // Database instance

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    backgroundColor: '#1f2937', // Set background color to see if window is loading
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false
    }
  });

  // Add debugging
  console.log('Loading file:', path.join(__dirname, 'dist/index.html'));
  console.log('File exists:', require('fs').existsSync(path.join(__dirname, 'dist/index.html')));
  
  win.loadFile(path.join(__dirname, 'dist/index.html'));
  
  // Open DevTools for debugging
  win.webContents.openDevTools();
  
  // Add error handling
  win.webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedURL) => {
    console.error('Failed to load:', errorCode, errorDescription, validatedURL);
  });
  
  win.webContents.on('did-finish-load', () => {
    console.log('Page finished loading');
  });
}

// IPC handlers for database operations
ipcMain.handle('get-courses', async () => {
  if (!db) {
    console.error('Database not initialized');
    return [];
  }
  try {
    return await courseQueries.getAllCourses(db);
  } catch (error) {
    console.error('Error getting courses:', error);
    return [];
  }
});

ipcMain.handle('add-course', async (event, courseData) => {
  if (!db) {
    console.error('Database not initialized');
    return { success: false, error: 'Database not initialized' };
  }
  try {
    return await courseQueries.insertCourse(db, courseData);
  } catch (error) {
    console.error('Error adding course:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('get-materials', async (event, moduleId) => {
  if (!db) {
    console.error('Database not initialized');
    return [];
  }
  try {
    return await materialQueries.getMaterialsByModule(db, moduleId);
  } catch (error) {
    console.error('Error getting materials:', error);
    return [];
  }
});

// OAuth handlers
ipcMain.handle('open-external-url', (event, url) => {
  return shell.openExternal(url);
});

ipcMain.handle('oauth-callback', (event, code, state) => {
  // Handle OAuth callback - in a real app, you'd exchange the code for a token
  console.log('OAuth callback received:', { code, state });
  return { success: true, code, state };
});

// Add more handlers as needed

app.whenReady().then(async () => {
  try {
    // Disable GPU acceleration to fix blank screen issues
    app.disableHardwareAcceleration();
    
    // Initialize database first
    db = await initializeDatabase();
    console.log('Database ready, starting app...');
    
    // Create window after database is ready
    createWindow();
  } catch (error) {
    console.error('Failed to initialize database:', error);
    // Still create window but database operations will fail gracefully
    createWindow();
  }
});

// Standard Electron app event handlers...
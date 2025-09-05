const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');
const { app } = require('electron');

const userDataPath = app.getPath('userData');
const dbDir = path.join(userDataPath, 'data');
const dbPath = path.join(dbDir, 'kairo.db');

// Ensure data directory exists
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Initialize database with promise
function initializeDatabase() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error('Error opening database:', err);
        reject(err);
        return;
      }
      
      console.log('Connected to SQLite database');
      
      // Enable foreign keys
      db.run('PRAGMA foreign_keys = ON');
      
      // Set journal mode to WAL for better performance
      db.run('PRAGMA journal_mode = WAL');
      
      // Read and execute schema
      const schemaPath = path.join(__dirname, 'schema.sql');
      const schemaSQL = fs.readFileSync(schemaPath, 'utf8');
      db.exec(schemaSQL, (err) => {
        if (err) {
          // If tables already exist, that's okay - just log and continue
          if (err.message.includes('already exists')) {
            console.log('Database schema already exists, continuing...');
            resolve(db);
          } else {
            console.error('Error executing schema:', err);
            reject(err);
          }
        } else {
          console.log('Database schema initialized');
          resolve(db);
        }
      });
    });
  });
}

// Export the initialization function
module.exports = initializeDatabase;
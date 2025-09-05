// Test database initialization
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

console.log('Testing database initialization...');

const dbPath = './test.db';

// Initialize database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database successfully');
    db.close();
  }
});

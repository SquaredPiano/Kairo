function getAllCourses(db) {
    return new Promise((resolve, reject) => {
      db.all(`
        SELECT c.*, COUNT(m.id) as module_count 
        FROM courses c 
        LEFT JOIN modules m ON c.id = m.course_id 
        GROUP BY c.id
        ORDER BY c.created_at DESC
      `, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
  
  function insertCourse(db, courseData) {
    return new Promise((resolve, reject) => {
      db.run(`
        INSERT INTO courses (id, name, source, term) 
        VALUES (?, ?, ?, ?)
      `, [
        courseData.id,
        courseData.name,
        courseData.source || 'Manual',
        courseData.term
      ], function(err) {
        if (err) {
          resolve({ success: false, error: err.message });
        } else {
          resolve({ success: true, id: courseData.id });
        }
      });
    });
  }
  
  module.exports = { getAllCourses, insertCourse };
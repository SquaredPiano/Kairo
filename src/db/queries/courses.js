function getAllCourses(db) {
    const stmt = db.prepare(`
      SELECT c.*, COUNT(m.id) as module_count 
      FROM courses c 
      LEFT JOIN modules m ON c.id = m.course_id 
      GROUP BY c.id
      ORDER BY c.created_at DESC
    `);
    return stmt.all();
  }
  
  function insertCourse(db, courseData) {
    const stmt = db.prepare(`
      INSERT INTO courses (id, name, source, term) 
      VALUES (?, ?, ?, ?)
    `);
    
    try {
      const result = stmt.run(
        courseData.id,
        courseData.name,
        courseData.source || 'Manual',
        courseData.term
      );
      return { success: true, id: courseData.id };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  
  module.exports = { getAllCourses, insertCourse };
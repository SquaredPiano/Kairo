-- User preferences and API keys (encrypted)
CREATE TABLE user_settings (
  id TEXT PRIMARY KEY,
  api_key TEXT,  -- Encrypted Canvas/Quercus token
  preferences JSON
);

-- Course hierarchy
CREATE TABLE courses (
  id TEXT PRIMARY KEY,
  name TEXT,
  source TEXT DEFAULT 'Manual', -- 'Canvas', 'Quercus', or 'Manual'
  term TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE modules (
  id TEXT PRIMARY KEY,
  course_id TEXT,
  name TEXT,
  description TEXT,
  position INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (course_id) REFERENCES courses (id) ON DELETE CASCADE
);

-- Educational materials
CREATE TABLE materials (
  id TEXT PRIMARY KEY,
  module_id TEXT,
  name TEXT,
  type TEXT, -- 'pdf', 'pptx', 'mp4', 'transcript'
  path TEXT, -- Local file path
  metadata JSON,
  imported_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  processed BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (module_id) REFERENCES modules (id) ON DELETE CASCADE
);

-- AI-generated outputs
CREATE TABLE outputs (
  id TEXT PRIMARY KEY,
  material_id TEXT,
  agent_type TEXT, -- 'flashcards', 'quiz', 'slides', 'summary'
  content JSON,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (material_id) REFERENCES materials (id) ON DELETE CASCADE
);

-- Projects/workspace organization
CREATE TABLE projects (
  id TEXT PRIMARY KEY,
  name TEXT,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE project_materials (
  project_id TEXT,
  material_id TEXT,
  added_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (project_id, material_id),
  FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE,
  FOREIGN KEY (material_id) REFERENCES materials (id) ON DELETE CASCADE
);
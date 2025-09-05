# Kairo - Local-First Study Agent

A local-first study companion where students drag in lectures (PDFs, slides, videos). On an infinite canvas, they drop AI agents (Notes, Flashcards, Quizzes, Slides). Each agent processes the material offline, outputs structured study resources, and supports chat commands (@Quiz_Agent make the quiz harder) for refinement.

## Development

### Prerequisites
- Node.js
- npm

### Setup
```bash
npm install
```

### Development
```bash
# Start the Electron app
npm start

# Build CSS (if needed)
npm run build:css

# Watch CSS changes
npm run watch:css
```

## Technology Stack

- **Frontend**: HTML5, Tailwind CSS, Lucide Icons
- **Desktop**: Electron
- **Build Tools**: PostCSS, Tailwind CSS v4
- **Icons**: Lucide Icons

## Features

- **Infinite Canvas**: Drag and drop AI agents onto materials
- **File Ingestion**: Support for PDFs, PPTX, MP4, DOCX with automatic transcription
- **AI Agents**: Notes, Flashcards, Quizzes, Slides with chat commands
- **Offline-First**: All processing happens locally, no cloud dependency
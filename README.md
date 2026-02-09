# React Task Management (To-Do) App

Project built with React and Vite. This small app implements a simple task management / to-do list meeting the intern requirements.

**Features implemented**
- Add new tasks (prevents empty submissions)
- Mark tasks as completed (checkbox or button; completed tasks show strike-through)
- Delete tasks
- Task counts: Total / Completed / Pending
- Uses functional components, `useState`, props, event handling, conditional rendering and array operations

**Project structure**
```
src/
├── components/
│   ├── TaskInput.jsx
│   ├── TaskList.jsx
│   └── TaskItem.jsx
├── App.jsx
├── index.js    <-- entry point (created)
└── App.css
```

**How to run (local)**
1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

**Build & Preview**

```bash
npm run build
npm run preview
```

**Submission**
- Create a PRIVATE GitHub repository and push this project.
- Invite `trinathm` to the repository when ready.
- Include this README in the repo.

If you want, I can also rename `src/main.jsx` → `src/index.jsx` or remove duplication; currently `src/main.jsx` and `src/index.js` both exist (the new `index.js` is the conventional entrypoint).

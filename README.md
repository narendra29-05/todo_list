## React Task Management (To-Do) App

Modern task manager built with React and Vite, styled like a mobile-first app with themes, categories, and simple language switching.

### Core features
- **Add / complete / delete tasks** with smooth animations (new tasks slide in, deleted tasks fade/slide out).
- **Task stats**: live counts for **Total / Completed / Pending**.
- **Persistent storage**: tasks are saved to `localStorage` so they survive page refreshes.
- **Grouping options**:
  - Group **by date** (📅)
  - Group **by category** (🏷️) such as Work, Personal, General, etc.
- **Task details**:
  - Due **date** (with friendly formatted label)
  - **Category** badge with color per group

### Themes
- Built-in **theme switcher** (🎨 icon in the top-right).
- Cycles through multiple color themes:
  - **Biscuit** (soft light gold / biscuit)
  - **Blue**
  - **Violet** (light pink–purple blend)
  - **Coffee** (brown / coffee-style)
- Themes change:
  - App background
  - Header gradient
  - Stat numbers and badges
  - Floating `+` add button
  - Action buttons (complete / delete)

### Task grouping, time & type
- **Group by date**:
  - Tasks are grouped under their **due date** with a readable label (e.g. `Mon, Jan 1, 2026`).
  - Helps you see which tasks are due **today, tomorrow, later** at a glance.
- **Group by type (category)**:
  - Built-in categories like **Work**, **Personal**, **General**, etc., each with its own colored badge.
  - Grouping by category shows sections per **type of task** (e.g. all Work tasks together).
- **When you add a task**:
  - You pick a **date** (time context for the task).
  - You pick a **category** (type of task), which is then used in the **By Category** view.

### Language toggle (English / Telugu)
- **Language toggle button** in the header (shows `అ` or `A`).
- Toggles the UI between:
  - **English**
  - **Telugu**
- When you change language, the following update:
  - App title and subtitle (`My Tasks` / `నా పనులు`)
  - Stat labels (Total / Completed / Pending)
  - Empty state text
  - Group toggle labels (By Date / By Category)
  - Category names (Work, Personal, General, etc.)
  - Task input placeholder and form buttons (Save / Cancel)
- Note: **Task descriptions themselves are not auto-translated**; whatever you type is shown as-is.

### Add-task popup (bottom sheet)
- Tapping the floating `+` button opens a **bottom popup panel**:
  - Text input for the task name
  - Date picker
  - Category dropdown
- Designed for **mobile use**:
  - Pops up from **bottom to top**
  - Limited height with internal scroll so fields stay visible above the on-screen keyboard as much as possible

### Project structure
```text
src/
├── components/
│   ├── TaskInput.jsx
│   ├── TaskList.jsx
│   └── TaskItem.jsx
├── App.jsx
├── main.jsx          # Vite / React entry point
└── App.css
```

### How to run (local)
1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Test on your phone over Wi‑Fi
From the project folder:

```bash
npm run dev -- --host 0.0.0.0 --port 5173
```

Then, on your phone (same Wi‑Fi network), open:

```text
http://YOUR_COMPUTER_IP:5173
```

### Build & Preview

```bash
npm run build
npm run preview
```

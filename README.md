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
















<img width="482" height="769" alt="Screenshot 2026-02-10 at 11 03 19 AM" src="https://github.com/user-attachments/assets/606cd7bf-0787-4aac-84c5-322637203fdd" />


<img width="482" height="826" alt="Screenshot 2026-02-10 at 10 36 59 AM" src="https://github.com/user-attachments/assets/828e446f-9771-47a9-9862-890545d02e54" />



<img width="479" height="770" alt="Screenshot 2026-02-10 at 11 05 02 AM" src="https://github.com/user-attachments/assets/82522446-97ff-431f-8953-e0a4835cb0ed" />




<img width="476" height="777" alt="Screenshot 2026-02-10 at 11 24 50 AM" src="https://github.com/user-attachments/assets/cbf2ee48-8f81-4987-ba15-f98553c8c3be" />




<img width="484" height="771" alt="Screenshot 2026-02-10 at 11 06 58 AM" src="https://github.com/user-attachments/assets/979559ca-036e-4819-9fe5-9968bc350f94" />


<img width="483" height="777" alt="Screenshot 2026-02-10 at 11 25 28 AM" src="https://github.com/user-attachments/assets/54a4e8a9-0c5c-4787-bbcd-2e28e68671f8" />


<img width="325" height="519" alt="Screenshot 2026-02-10 at 11 29 01 AM" src="https://github.com/user-attachments/assets/41e0fba4-702a-4f72-90e6-0a6b3922ba06" />




<img width="479" height="827" alt="Screenshot 2026-02-10 at 10 50 10 AM" src="https://github.com/user-attachments/assets/ada33325-2474-4018-841c-104b7b0139f7" />






<img width="486" height="829" alt="Screenshot 2026-02-10 at 10 46 29 AM" src="https://github.com/user-attachments/assets/4c788064-cdd1-4a9b-912d-0adaafc07dbd" />











<img width="479" height="827" alt="Screenshot 2026-02-10 at 10 50 10 AM" src="https://github.com/user-attachments/assets/c5518e34-a7e0-4f9a-8708-066d383b0cd6" />



























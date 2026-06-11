# 🚀 TodoSpace

A modern and responsive Todo Management Application built with **React**, **Firebase Firestore**, **Formik**, **Yup**, and **Tailwind CSS**.

TodoSpace helps users organize their daily tasks with real-time synchronization, task completion tracking, search functionality, and a clean user experience.

---

## 📸 Preview

```text
┌──────────────────────────────────────┐
│               TodoSpace              │
├──────────────────────────────────────┤
│ 🔍 Search Todos...           ➕ Add  │
├──────────────────────────────────────┤
│ [ Todos ]     [ Completed ]          │
├──────────────────────────────────────┤
│ Learn React          ✏️  ✅  🗑️      │
│ Build Todo App with Firebase         │
├──────────────────────────────────────┤
│ Learn Firestore      ✏️  ✅  🗑️      │
│ Practice CRUD Operations             │
└──────────────────────────────────────┘
```

---

# ✨ Features

### Todo Management

* ✅ Create Todo
* ✏️ Update Todo
* 🗑️ Delete Todo
* ✔️ Mark Todo as Completed
* 🔍 Search Todos
* 📋 View Todos
* 🎯 Filter Todos by Status

### User Experience

* Real-time updates using Firestore
* Responsive design
* Modal-based forms
* Form validation using Yup
* Success & error notifications
* Loading states
* Modern UI with Tailwind CSS

---

# 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS

### Backend & Database

* Firebase Firestore

### Form Handling

* Formik
* Yup

### Notifications

* React Toastify

### Icons

* React Icons

---

# 📂 Project Structure

```text
src
│
├── components
│   ├── Navbar.jsx
│   ├── Modal.jsx
│   ├── TodoCard.jsx
│   ├── NotFoundTodo.jsx
│   └── AddAndUpdateTodo.jsx
│
├── hooks
│   ├── useDisclosure.js
│   └── useTodos.js
│
├── services
│   └── todoService.js
│
├── schemas
│   └── todoSchema.js
│
├── config
│   └── firebase.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🗄️ Firestore Data Model

Each Todo document follows the structure:

```js
{
  id: "abc123",

  title: "Learn React",

  description: "Build a production-ready Todo App",

  status: "todo",

  createdAt: Timestamp,

  completedAt: null
}
```

### Completed Todo Example

```js
{
  id: "abc123",

  title: "Learn React",

  description: "Build a production-ready Todo App",

  status: "completed",

  createdAt: Timestamp,

  completedAt: Timestamp
}
```

---

# 🧠 System Design Thinking

Before building the UI, the application was designed around data flow.

## Data Flow

```text
Firestore
    │
    ▼
useTodos Hook
    │
    ▼
App.jsx
    │
    ▼
Components
```

---

# ➕ Add Todo Flow

```text
User Clicks Add Button
          │
          ▼
     Open Modal
          │
          ▼
     Enter Details
          │
          ▼
      Submit Form
          │
          ▼
 Firebase addDoc()
          │
          ▼
 Firestore Updated
          │
          ▼
 Real-Time Listener
          │
          ▼
 UI Updates Automatically
```

---

# 📥 Load Todos Flow

```text
Firestore
    │
    ▼
onSnapshot()
    │
    ▼
Todos State Updates
    │
    ▼
Component Re-render
    │
    ▼
Updated UI
```

---

# ✔️ Complete Todo Flow

```text
User Clicks Complete
          │
          ▼
      updateDoc()
          │
          ▼
 status = completed
 completedAt = timestamp
          │
          ▼
 Firestore Updated
          │
          ▼
 UI Updates Automatically
```

---

# 🔍 Search Flow

```text
User Types Keyword
        │
        ▼
Search State Updates
        │
        ▼
Filter Todos
        │
        ▼
Display Matching Results
```

### Search Logic

```js
todos.filter((todo) =>
  todo.title
    .toLowerCase()
    .includes(search.toLowerCase())
);
```

---

# 🎯 Filter Flow

### Pending Todos

```js
todo.status === "todo"
```

### Completed Todos

```js
todo.status === "completed"
```

### Tab State

```js
const [tab, setTab] = useState("todo");
```

---

# ✏️ Update Todo Flow

```text
User Clicks Edit
        │
        ▼
Open Modal
        │
        ▼
Load Existing Data
        │
        ▼
Update Fields
        │
        ▼
updateDoc()
        │
        ▼
Firestore Updated
        │
        ▼
UI Updates Automatically
```

---

# 🗑️ Delete Todo Flow

```text
User Clicks Delete
         │
         ▼
     deleteDoc()
         │
         ▼
 Firestore Updated
         │
         ▼
 UI Updates Automatically
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=

VITE_FIREBASE_AUTH_DOMAIN=

VITE_FIREBASE_PROJECT_ID=

VITE_FIREBASE_STORAGE_BUCKET=

VITE_FIREBASE_MESSAGING_SENDER_ID=

VITE_FIREBASE_APP_ID=
```

---



### Clone Repository

```bash
git clone https://github.com/yourusername/todospace.git
```

### Move Into Project

```bash
cd todospace
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

# 🎯 Learning Outcomes

This project demonstrates:

* React Component Architecture
* Custom Hooks
* Firebase Firestore CRUD Operations
* Real-Time Data Synchronization
* Form Validation
* State Management
* Service Layer Pattern
* Modern UI/UX Practices
* Reusable Component Design

---

# 🔮 Future Improvements

* Firebase Authentication
* User-specific Todos
* Due Dates
* Priority Levels
* Categories
* Dashboard Analytics
* Drag & Drop Sorting
* Dark Mode
* Offline Support
* Pagination & Infinite Scroll

---

# 👨‍💻 Author

**Shivam Kumar**

[![GitHub](https://img.shields.io/badge/GitHub-connectoshivam-181717?style=for-the-badge&logo=github)](https://github.com/connectoshivam)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-connectoshivam-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/connectoshivam)
[![Twitter](https://img.shields.io/badge/Twitter-connectoshivam-f6b355?style=for-the-badge&logo=x)](https://twitter.com/connectoshivam)

Built to practice real-world React development, Firebase integration, and scalable frontend architecture.

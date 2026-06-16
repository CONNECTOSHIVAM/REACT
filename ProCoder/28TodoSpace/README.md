# 1. Understand The Problem

## System

Firebase Todo App

## Goal

Allow users to manage tasks efficiently.

## Features

 - Read Todo
 - Create Todo
 - Update Todo
 - Complete Todo
 - Delete Todo
 - Search Todo
 - Filter Todo

## CRUD Mapping

| Operation | Feature     |
| ------    |  ----       |
| Create    | Add Todo    |
| Read      | View Todo   |
| Update    | Edit Todo   |
| Delete    | Delete Todo |

---

# 2. Define Business Rules

Before coding, define how the system behaves.

### Rules

* A todo can only be in one state.
* Every todo must contain required information.
* Completed todos must store completion time.

### States

```text
   todo
   completed
```

### State Rule
```text
if status = completed
→ completedAt must exist
```

```text
if status = todo
→ completedAt must be null
```

---

# 3. Design Data Models

Everything starts from data.

```js

{
    id: "",
    title: "",
    description: "",
    status: "todo",
    createdAt: "",
    completedAt: null
}
```

### Core Principle

```text
UI is a visual representation of data.
```

---

# 4. Design Business State Machine

Think about business states before the React state.

```text
       +-----------------+
       |      TODO       |
       +-----------------+
                |
                |
            Complete
                |
                |
                ▼
       +-----------------+
       |   COMPLETED     |
       +-----------------+


```

---

# 5. Design User Journey

```text
Open App
    ↓
View Todos
    ↓
Search Todo
    ↓
Create Todo
    ↓
Complete Todo
    ↓
Edit Todo
    ↓
Delete Todo
```

---

# 6. Map User Actions

Every action should map to a function.

| User Action | Function        |
|-------------|-----------------|
| Add         | addTodo()       |
| Edit        | updateTodo()    |
| Delete      | deleteTodo()    |
| Complete    | completeTodo()  |
| Search      | searchTodo()    |
| filter      | fiterTodo()     |

# 7. Discover Required State

State should be discovered before coding.

```js

const [todos, setTodos] = useState([]);

const [search, setSearch] = useState("");

const [activeTab, setActiveTab] = useState("todo");

const [loading, setLoading] = useState(true);

const [isOpen, setIsOpen] = useState(false);
```

```text
Does the UI need this value?
Yes → State
No  → Don't Create State
```

---

# 8. Design Data Flow

Source of Truth:

```text
Firestore
```

Flow:

```text
Firestore
    ↓
onSnapshot()
    ↓
useTodos()
    ↓
App.jsx
    ↓
Components
```

### Principle

```text
Data flow downward.
Actions flow upward.
```

---

# 9. Design System Architecture

```text
 ______________
|      UI      |
|______________|
       ↓
 ______________
|     Hooks    |
|______________|
       ↓
 ______________
|   Services   |
|______________|
       ↓
 ______________
|   Firebase   |
|______________|              

```

### Layer Responsibilities

#### UI Layer

Responsible for displaying data.

#### Hook Layer

Responsible for managing state and subscriptions.

#### Service Layer

Responsible for CRUD operations.

#### Firebase Layer

Responsible for data persistence.

---

# 10. Project Structure

```text

src
|
├── components
|    ├── Navbar.jsx
|    ├── Modal.jsx
|    ├── TodoCard.jsx
|    ├── AddAndUpdateTodo.jsx
|    └── TodoNotFound.jsx
|
|
├── hooks
|     ├── useTodos.js
|     └── useDisclosure.js
|
├── services
|      └── todoService.js
|
├── schemas
|      └── todoSchema.js
|
├── config
|      └── firebase.js
|
├── App.jsx
├── index.css
└── main.jsx

```

---

# 11. Component Boundaries

Ask:

```text
Which part changes independently?
```

Components:

```text
Navbar
TodoCard
Modal
AddAndUpdateTodo
TodoNotFound
```

### Principle
```text
One Component = One Responsibility
```

---

# 12. UI Structure

```text
--------------------------------
| Firebase Todo App            |
--------------------------------

[ Search Todo ]      [+ Add]

--------------------------------
| Todo | Completed             |
--------------------------------

Todo Card

Title
Description

Edit Complete Delete
```

---

# 13. Build Order

Build from the foundation upward.

### Step 1

Setup Firebase

```text
config/firebase.js
```

### Step 2

Create Service Layer

```text
services/todoService.js
```

Functions:

```js
createTodo()
updateTodo()
deleteTodo()
completeTodo()
```

### Step 3

Create Custom Hook

```text
hooks/useTodos.js
```

### Step 4

Create Utility Hook

```text
useDisclosure.js
```

### Step 5

Create Empty Components

```text
Navbar
TodoCard
Modal
AddAndUpdateTodo
TodoNotFound
```

### Step 6

Build App Skeleton

```text
Navbar
Search
Tabs
TodoList
Modal
```

### Step 7

Connect  Firebase Data

### Step 8

Implement Add Todo

### Step 9

Implement Edit Todo

### Step 10

Implement Complete Todo

### Step 11

Implement Delete Todo

### Step 12

Implement Search

### Step 13

Implement Filter

### Step 14

Add Validation

### Step 15

Polish UI & UX

---

# 👨‍💻 Author



**Shivam Kumar**

[![GitHub](https://img.shields.io/badge/GitHub-connectoshivam-181717?style=for-the-badge&logo=github)](https://github.com/connectoshivam)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-connectoshivam-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/connectoshivam)
[![Twitter](https://img.shields.io/badge/Twitter-connectoshivam-f6b355?style=for-the-badge&logo=x)](https://twitter.com/connectoshivam)

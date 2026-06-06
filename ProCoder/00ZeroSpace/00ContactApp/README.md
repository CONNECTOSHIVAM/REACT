# 📱 Firebase Contact Management App (CMA)

A modern Contact Management Application built with **React.js**, **Firebase Firestore**, **Formik**, **Yup**, and **React Toastify**.

The application allows users to efficiently manage contacts with complete CRUD operations and real-time Firebase synchronization.

---

## 🚀 Features

### Contact Management

* ➕ Add New Contact
* 👀 View Contacts
* ✏️ Update Existing Contact
* 🗑️ Delete Contact
* 🔍 Search Contacts Instantly

### User Experience

* Responsive UI
* Real-Time Firebase Updates
* Form Validation
* Toast Notifications
* Modal-Based Contact Form
* Clean Component Architecture

---

# 🖥️ Application UI

```text
--------------------------------
| Firebase Contact App         |
--------------------------------

[ Search Contact ]   [+ Add]

--------------------------------
| Shivam      Edit   Delete    |
--------------------------------

--------------------------------
| Rahul       Edit   Delete    |
--------------------------------
```

---

# 🏗️ Project Architecture

## Component Structure

```text
App
│
├── Navbar
│
├── SearchBar
│
├── ContactList
│   ├── ContactCard
│   ├── ContactCard
│   └── ContactCard
│
└── Modal
      └── AddAndUpdateContact
```

---

## Folder Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── ContactCard.jsx
│   ├── Modal.jsx
│   └── AddAndUpdateContact.jsx
│
├── hooks/
│   └── useDisclosure.js
│
├── config/
│   └── firebase.js
│
├── App.jsx
└── main.jsx
```

---

# 🧠 Project Planning Approach

Before writing code, the project was broken down into independent pieces.

## Independent Components

```text
1. Navbar
2. Search Box
3. Add Button
4. Contact Card
5. Contact List
6. Modal
7. Contact Form
```

---

# 📊 Data Modeling

A contact contains:

```javascript
{
  id: "1",
  name: "Shivam",
  email: "shivam@example.com"
}
```

Multiple contacts are stored inside state:

```javascript
const [contacts, setContacts] = useState([]);
```

### Thinking Process

```text
Problem
   ↓
Data
   ↓
State
```

---

# ⚡ User Actions

The application supports four primary actions:

```javascript
addContact();
updateContact();
deleteContact();
searchContact();
```

---

# 🔥 Firebase Backend Integration

Contacts are stored inside Firebase Firestore.

### CRUD Mapping

| Operation | Firebase Method          |
| --------- | ------------------------ |
| Create    | addDoc()                 |
| Read      | getDocs() / onSnapshot() |
| Update    | updateDoc()              |
| Delete    | deleteDoc()              |

---

# 🔄 Data Flow

```text
Firebase Firestore
        │
        ▼
      App.jsx
        │
        ▼
  ContactCard.jsx
```

Parent component owns the data and passes it down as props.

```jsx
<ContactCard contact={contact} />
```

---

# 🪟 Modal Management

The contact form is displayed inside a modal.

### Requirement

```text
Need Visibility
      ↓
Need State
      ↓
useState
```

### State

```javascript
const [isOpen, setIsOpen] = useState(false);

// Open Modal
setIsOpen(true);

// Close Modal
setIsOpen(false);
```

---

# 📝 Form Management

The application uses **Formik** for form handling and **Yup** for validation.

### Fields

```javascript
{
  name: "",
  email: ""
}
```

### Validation Rules

```text
✔ Name Required
✔ Email Required
✔ Valid Email Format
```

Example:

```javascript
const initialValues = {
  name: "",
  email: ""
};
```

---

# 🔍 Search Functionality

Search should never modify original data.

### State Design

```javascript
const [contacts, setContacts] = useState([]);
const [allContacts, setAllContacts] = useState([]);
```

### Example

```javascript
const filteredContacts = allContacts.filter((contact) =>
  contact.name.toLowerCase().includes(searchTerm.toLowerCase())
);

setContacts(filteredContacts);
```

---

# 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* CSS

### Backend

* Firebase Firestore

### Libraries

* Formik
* Yup
* React Toastify
* React Icons

---

### Step 1

Create a Firebase Project.

### Step 2

Enable Firestore Database.

### Step 3

Create a configuration file:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
```

---

# 🎯 Learning Outcomes

Through this project, you will learn:

* React Component Architecture
* State Management with Hooks
* CRUD Operations
* Firebase Firestore Integration
* Real-Time Data Synchronization
* Form Validation using Formik & Yup
* Search Implementation
* Modal Management
* Component Communication via Props

---

# 📸 Future Improvements

* Authentication System
* Contact Categories
* Contact Profile Images
* Pagination
* Dark Mode
* Export Contacts to CSV
* Mobile App Version

---

# 👨‍💻 Author

**Shivam Kumar**

Passionate about building scalable web applications and solving real-world problems using React and Firebase.

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

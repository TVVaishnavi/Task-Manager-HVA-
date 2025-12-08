# Task Manager Application (React)

This is a fully functional Task Management application built using React.  
The application allows users to create, update, delete, filter, search, and paginate tasks.  
All data is persisted using the browser's localStorage, ensuring tasks remain available across sessions.

---

## Application Overview

The Task Manager is designed to demonstrate core front-end engineering skills using React, including:

- Component-driven UI architecture  
- State management using React Hooks  
- Controlled form handling  
- Conditional rendering  
- Pagination logic  
- Search + filter integration  
- LocalStorage persistence  
- Clean UI/UX layout  

This project was developed as part of the **Hyperverge Academy Mini Hackathon (Task Manager Project).**

---

## Features

### Task Operations
- Add tasks with title, description, priority, and status  
- Edit existing tasks through a pre-filled form  
- Delete tasks with instant UI updates  
- Tasks are displayed with the most recently added task first  

### Searching & Filtering
- Search tasks by title  
- Filter tasks by priority (Low, Medium, High)  
- Filter tasks by status (Pending, In Progress, Completed)  
- Filters and search work together seamlessly with pagination  

### Pagination
- Displays 5 tasks per page  
- Supports next/previous page navigation  
- Automatically resets to page 1 when filters or search queries change  

### Persistence (LocalStorage)
- All tasks remain saved after page reload  
- Tasks are sorted by creation time (latest first)  

### User Interface
- Fixed header with search bar, filter panel button, and add-task button  
- Slide-in filter panel with overlay click-to-close  
- Task cards arranged in a responsive two-column grid  
- Center alignment applied when the number of tasks is odd  
- Toast notifications for add, edit, and delete actions  

---

## Running the Project Locally

### Clone the repository
```bash
git clone <https://github.com/TVVaishnavi/Task-Manager-HVA-.git>
````

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

Local development URL:

```
http://localhost:3000/
```

---

## Deployment

The application is deployed using Vercel.

Live Demo:
[https://task-manager-hva-eta.vercel.app/](https://task-manager-hva-eta.vercel.app/)

Deployment is automated and updates on every commit.

---

## Key Learning Outcomes

* Designing and building reusable React components
* Managing complex UI state using hooks
* Implementing search, filters, and pagination together
* Using LocalStorage for persistent client-side data
* Handling CRUD operations entirely on the frontend
* Creating clean, responsive, user-friendly interfaces
* Deploying and debugging React applications on Vercel

---

## Future Enhancements

* Backend integration (Node.js + MongoDB)
* User authentication and role-based task access
* Due dates, reminders, and task history
* Drag-and-drop task ordering
* Light/Dark theme option
* Category/label-based filtering

---

## Author

**Vaishnavi T V**
```

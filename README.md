# Task Management App

A simple and user-friendly **Task Management Application** developed using **React.js, Node.js, and Express.js**. The application helps users create, manage, update, and delete tasks efficiently.

## Features

* Add new tasks
* View all tasks
* Update task status
* Delete tasks
* Simple and responsive user interface
* REST API for task management
* Separate frontend and backend

## Tech Stack

### Frontend

* React.js
* JavaScript
* HTML
* CSS

### Backend

* Node.js
* Express.js
* REST API

## Project Structure

```text
Task_Management_App/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── package.json
│   └── ...
│
└── README.md
```

## Application Workflow

```text
User
  |
  v
React.js Frontend
  |
  | HTTP Requests
  v
Node.js + Express.js Backend
  |
  v
Task Data
```

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Task_Management_App
```

### 2. Setup Backend

```bash
cd backend
npm install
npm start
```

The backend server will start on the configured port.

### 3. Setup Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the URL shown in the terminal to access the application.

## REST API

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/tasks`     | Get all tasks     |
| POST   | `/api/tasks`     | Create a new task |
| PUT    | `/api/tasks/:id` | Update a task     |
| DELETE | `/api/tasks/:id` | Delete a task     |

## Task Details

Each task can contain:

* **Title** – Name of the task
* **Description** – Details about the task
* **Status** – Current state of the task

Example:

```json
{
  "title": "Complete Project",
  "description": "Finish the Task Management Application",
  "status": "Pending"
}
```

## How It Works

1. The user opens the Task Management Application.
2. New tasks can be added through the frontend.
3. The React frontend sends requests to the backend.
4. The Express.js server processes the requests.
5. Users can view the available tasks.
6. Task status can be updated when the task progresses.
7. Tasks can be deleted when they are no longer required.

## Future Enhancements

* User login and registration
* Task priority
* Due dates
* Task search and filtering
* User-specific task lists
* Database integration
* Task notifications

## Author

**Aditi Patil**

Data Science Engineering Student

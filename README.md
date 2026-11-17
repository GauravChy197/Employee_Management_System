# Employee Management System (EMS)

A clean, responsive Employee & Task Management web application built with React and Tailwind CSS. It provides role-based dashboards for administrators to assign and track tasks, and for employees to manage their daily workflow.

---

## Features

### Admin Dashboard
* **Task Creation:** Assign new tasks with titles, descriptions, due dates, categories, and target employees.
* **Team Overview:** View a real-time breakdown of every employee's task status (`New`, `Active`, `Completed`, `Failed`).

### Employee Dashboard
* **Task Metrics:** Quick overview cards displaying counts for New, Accepted, Completed, and Failed tasks.
* **Workflow Management:** Accept newly assigned tasks and mark active tasks as either **Completed** or **Failed**, updating statistics dynamically.

### Core Functionality
* **Role-Based Authentication:** Separate views and permissions for Admin and Employee logins.
* **State Persistence:** Uses React `useContext` for global state management and `localStorage` so tasks and session data persist across page refreshes.

---

## Tech Stack

* **Frontend:** React (Hooks, Context API)
* **Styling:** Tailwind CSS
* **Build Tool:** Vite
* **Storage:** Browser `localStorage`

---

## Demo Credentials

Use the following credentials to test both Admin and Employee roles in the live app:

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@1.com` | `123` |
| **Employee 1** | `emp1@example.com` | `123` |
| **Employee 2** | `emp2@example.com` | `123` |
| **Employee 3** | `emp3@example.com` | `123` |
| **Employee 4** | `emp4@example.com` | `123` |
| **Employee 5** | `emp5@example.com` | `123` |

---

## Getting Started (Local Setup)

1. **Clone the repository:**
   `git clone https://github.com/GauravChy197/Employee_Management_System.git`
   `cd Employee_Management_System`

2. **Install dependencies:**
   `npm install`

3. **Start the development server:**
   `npm run dev`

4. Open the local URL shown in your terminal (usually `http://localhost:5173`).

## Project Structure

```text
src/
├── Components/
│   ├── Auth/
│   │   └── Login.jsx
│   ├── Dashboard/
│   │   ├── AdminDashobard.jsx
│   │   └── EmployeeDashboard.jsx
│   ├── Others/
│   │   ├── AllTasks.jsx
│   │   ├── CreateTask.jsx
│   │   ├── Header.jsx
│   │   └── TaskNumber.jsx
│   └── TaskList/
│       ├── AcceptedTask.jsx
│       ├── CompleteTask.jsx
│       ├── FailedTaks.jsx
│       ├── NewTask.jsx
│       └── TaskList.jsx
├── Context/
│   └── AuthProvider.jsx
├── Utils/
│   └── LocalStorage.jsx
├── App.jsx
└── main.jsx
```

---

## Live Demo

Check out the live application here: **[Live Demo Link](https://employee-management-system-nine-taupe.vercel.app/)**

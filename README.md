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
* **Role-Based Authentication:** Separate views and permissions for Admin and Employee logins[cite: 2].
* **State Persistence:** Uses React `useContext` for global state management and `localStorage` so tasks and session data persist across page refreshes[cite: 2, 9].

---

## Tech Stack

* **Frontend:** React (Hooks, Context API)[cite: 2, 3]
* **Styling:** Tailwind CSS[cite: 4, 5]
* **Build Tool:** Vite
* **Storage:** Browser `localStorage`[cite: 2, 9]

---

## Demo Credentials

Use the following credentials to test both Admin and Employee roles in the live app:

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@1.com`[cite: 2] | `123`[cite: 2] |
| **Employee 1** | `emp1@example.com` | `123` |
| **Employee 2** | `emp2@example.com` | `123` |
| **Employee 3** | `emp3@example.com` | `123` |
| **Employee 4** | `emp4@example.com` | `123` |
| **Employee 5** | `emp5@example.com` | `123` |

---

## Getting Started (Local Setup)

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
   cd your-repo-name
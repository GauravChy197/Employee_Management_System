const employees = [
  {
    id: 1,
    name: "Suman Thapa",
    email: "emp1@example.com",
    password: "123",

    taskNumber: {
      newTask: 2,
      active: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design product page",
        taskDesc: "Create a clean and responsive product page design for the new product.",
        taskDate: "2026-11-08",
        category: "Design"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create logo concepts",
        taskDesc: "Prepare three different logo concepts for the upcoming project.",
        taskDate: "2026-11-10",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update landing page",
        taskDesc: "Update the landing page layout and improve the hero section.",
        taskDate: "2026-11-11",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix navbar issues",
        taskDesc: "Fix the responsive navigation menu on mobile devices.",
        taskDate: "2026-11-05",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Design login screen",
        taskDesc: "Create the UI design for the employee login screen.",
        taskDate: "2026-11-01",
        category: "UI/UX"
      }
    ]
  },

  {
    id: 2,
    name: "Prabin Gurung",
    email: "emp2@example.com",
    password: "123",

    taskNumber: {
      newTask: 1,
      active: 2,
      completed: 2,
      failed: 0
    },

    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build dashboard cards",
        taskDesc: "Develop reusable dashboard cards for displaying employee statistics.",
        taskDate: "2026-11-09",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create user profile",
        taskDesc: "Build the employee profile page with editable user information.",
        taskDate: "2026-11-11",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup project structure",
        taskDesc: "Create the initial folder structure and configure the development environment.",
        taskDate: "2026-11-02",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Improve dashboard UI",
        taskDesc: "Improve the spacing, typography, and overall appearance of the dashboard.",
        taskDate: "2026-11-12",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix button styling",
        taskDesc: "Fix inconsistent button sizes and spacing throughout the application.",
        taskDate: "2026-11-06",
        category: "UI/UX"
      }
    ]
  },

  {
    id: 3,
    name: "Aashish Karki",
    email: "emp3@example.com",
    password: "123",

    taskNumber: {
      newTask: 1,
      active: 1,
      completed: 1,
      failed: 2
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create API documentation",
        taskDesc: "Document all available API endpoints and their required parameters.",
        taskDate: "2026-11-09",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test login API",
        taskDesc: "Test the login API with valid and invalid employee credentials.",
        taskDate: "2026-11-10",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup database",
        taskDesc: "Create the initial database structure for employee records.",
        taskDate: "2026-11-01",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy API server",
        taskDesc: "Deploy the backend API to the staging environment.",
        taskDate: "2026-11-03",
        category: "Deployment"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix database queries",
        taskDesc: "Optimize slow database queries used by the employee dashboard.",
        taskDate: "2026-11-05",
        category: "Backend"
      }
    ]
  },

  {
    id: 4,
    name: "Nisha Adhikari",
    email: "emp4@example.com",
    password: "123",

    taskNumber: {
      newTask: 2,
      active: 0,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create marketing banner",
        taskDesc: "Design a promotional banner for the upcoming product launch.",
        taskDate: "2026-11-08",
        category: "Marketing"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare social media posts",
        taskDesc: "Create social media graphics and captions for this week's campaign.",
        taskDate: "2026-11-10",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design email template",
        taskDesc: "Create a responsive promotional email template.",
        taskDate: "2026-11-02",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update brand assets",
        taskDesc: "Organize and update the company's latest brand assets.",
        taskDate: "2026-11-06",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Create campaign report",
        taskDesc: "Prepare a performance report for the previous marketing campaign.",
        taskDate: "2026-11-04",
        category: "Marketing"
      }
    ]
  },

  {
    id: 5,
    name: "Rojan Shrestha",
    email: "emp5@example.com",
    password: "123",

    taskNumber: {
      newTask: 0,
      active: 3,
      completed: 2,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build employee table",
        taskDesc: "Create a responsive table to display employee information.",
        taskDate: "2026-11-09",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add search functionality",
        taskDesc: "Add search functionality to allow users to quickly find employees.",
        taskDate: "2026-11-11",
        category: "JavaScript"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement pagination",
        taskDesc: "Add pagination to the employee management table.",
        taskDate: "2026-11-12",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create filter system",
        taskDesc: "Add filters for employee department and task status.",
        taskDate: "2026-11-03",
        category: "JavaScript"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix responsive layout",
        taskDesc: "Fix layout problems on tablet and mobile screen sizes.",
        taskDate: "2026-11-07",
        category: "Frontend"
      }
    ]
  }
];



const admin = [{
  "name": "Shankar",
  "email": "admin@1.com",
  "password": "123"
}]


export const setLocalStorage = () => {
  if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(employees))
  }
  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify(admin))
  }
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return { employees, admin };
}   

export const saveEmployees = (employees) => {
    localStorage.setItem('employees', JSON.stringify(employees))
}


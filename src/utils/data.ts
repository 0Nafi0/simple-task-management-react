import { Task } from "../store";

const dummyTasks: Task[] = [
  {
    id: "2004d3f5-6c15-4e28-9bc4-a5b393a0ef7f",
    title: "Finish UI Design",
    description: "Complete the user interface for the task management app.",
    dueDate: "2025-04-05",
    priority: "High",
    status: false,
  },
  {
    id: "fb8ac723-b171-41e3-81d1-308f808b483c",
    title: "Database Setup",
    description: "Set up MongoDB and create schemas for storing tasks.",
    dueDate: "2025-04-07",
    priority: "Medium",
    status: false,
  },
  {
    id: "0be26c33-d5e2-44f7-81e0-45128a2d28aa",
    title: "Implement Authentication",
    description: "Add user authentication using JWT.",
    dueDate: "2025-04-10",
    priority: "High",
    status: false,
  },
  {
    id: "beb246cf-74a2-4144-a5ee-6266a482f875",
    title: "Write API Endpoints",
    description: "Develop RESTful APIs for task CRUD operations.",
    dueDate: "2025-04-12",
    priority: "Medium",
    status: false,
  },
  {
    id: "d365b707-9b9f-486d-b397-59c32ddb91a9",
    title: "Test and Debug",
    description: "Perform testing and fix any existing bugs.",
    dueDate: "2025-04-15",
    priority: "Low",
    status: false,
  },
];

export default dummyTasks;

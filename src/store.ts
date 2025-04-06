import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  status: boolean;
}

interface TaskStore {
  tasks: Task[];
  addATask: (task: Task) => void;
  markAsCompleted: (id: string) => void;
  deleteATask: (id: string) => void;
  setTasksOnDrag: (tasks: Task[]) => void;
}

const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      addATask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),
      markAsCompleted: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status: true } : task
          ),
        })),
      deleteATask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      setTasksOnDrag: (tasks) =>
        set({
          tasks: tasks,
        }),
    }),
    { name: "task-storage" }
  )
);

export default useTaskStore;

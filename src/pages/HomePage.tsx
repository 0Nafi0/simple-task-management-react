import { TrashIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";

import useTaskStore from "../store";

export default function HomePage() {
  const navigate = useNavigate();
  const tasks = useTaskStore((state) => state.tasks);
  const markAsCompleted = useTaskStore((state) => state.markAsCompleted);
  const deleteATask = useTaskStore((state) => state.deleteATask);

  return (
    <div className="overflow-x-auto px-8 pt-20">
      <h1 className="text-center text-3xl m-3">Your Tasks</h1>
      {tasks.length > 0 ? (
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Mark As Complete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, i) => {
              return (
                <tr key={task.id} className="hover:bg-base-300">
                  <th>{i + 1}</th>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.priority}</td>
                  <td
                    className={task.status ? "text-green-400" : "text-red-400"}
                  >
                    {task.status ? "Completed" : "Not Completed"}
                  </td>
                  <td>
                    <button onClick={() => deleteATask(task.id)}>
                      <TrashIcon className="size-6 text-blue-500 cursor-pointer" />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => markAsCompleted(task.id)}>
                      <CheckIcon className="size-6 text-green-500 cursor-pointer" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="hero bg-base-100">
          <div className="hero-content text-center">
            <div className="max-w-md flex flex-col gap-9">
              <h1 className="text-5xl font-bold">
                OOPS! Looks like you don't have any tasks
              </h1>

              <button
                onClick={() => navigate("/add-task")}
                className="btn btn-primary"
              >
                Click here to Add a Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

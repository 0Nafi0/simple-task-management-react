import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useTaskStore from "../store";
import { v4 as uuidv4 } from "uuid";

export default function AddTask() {
  const addATask = useTaskStore((state) => state.addATask);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Not Selected",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = uuidv4();
    addATask({
      ...formData,
      status: false,
      id,
    });
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 p-6 pt-8 w-128 shadow-xl border border-gray-300 rounded-2xl flex flex-col gap-5 justify-center items-center justify-self-center self-center"
    >
      <h1 className="text-3xl">Add a Task</h1>
      <div className="w-full max-w-md">
        <label className="floating-label w-full">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input input-md w-full"
            value={formData.title}
            onChange={handleChange}
          />
          <span>Title</span>
        </label>
      </div>

      <fieldset className="fieldset w-full max-w-md">
        <textarea
          className="textarea h-24 w-full"
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </fieldset>
      <div className="w-full max-w-md">
        <label className="floating-label w-full">
          <input
            type="date"
            className="input"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />
          <span>Due Date</span>
        </label>
      </div>
      <div className="w-full max-w-md">
        <select
          onChange={handleChange}
          name="priority"
          defaultValue="Pick Priority"
          className="select select-neutral"
        >
          <option value={"Not Selected"} disabled={false}>
            Priority Level
          </option>
          <option value={"Low"}>Low</option>
          <option value={"Medium"}>Medium</option>
          <option value={"High"}>High</option>
        </select>
      </div>
      <div className="w-full max-w-md">
        <button type="submit" className="btn btn-neutral w-full">
          Add this Task
        </button>
      </div>
    </form>
  );
}

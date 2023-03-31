import { createContext, useState, useEffect } from "react";

export const TasksContext = createContext();

const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const LoadTasks = async () => {
    try {
      let res = await fetch("http://localhost:8000/getTasks");
      let data = await res.json();
      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  };

  const CreateTask = async (task) => {
    try {
      await fetch("http://localhost:8000/createTask", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
        cache: "default",
      });
      console.log("added");
    } catch (err) {
      console.log(err);
    }
  };

  const DeleteTask = async (id) => {
    try {
      await fetch(`http://localhost:8000/deleteTask/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        cache: "default",
      });
      console.log("added");
    } catch (err) {
      console.log(err);
    }
  };

  const GetFormatDate = () => {
    let date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());

    return `${day}/${month}/${year}`;
  };

  const GetFormatTime = () => {
    let date = new Date();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    LoadTasks();
  }, [tasks]);

  const value = {
    tasks,
    setTasks,
    LoadTasks,
    CreateTask,
    DeleteTask,
    GetFormatDate,
    GetFormatTime,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
export default TasksContextProvider;

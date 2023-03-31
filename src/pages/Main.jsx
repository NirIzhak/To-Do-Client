import React, { useContext, useRef } from "react";
import Task from "../components/Task";
import { TasksContext } from "../context/TasksContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const { tasks, CreateTask, GetFormatDate, GetFormatTime } =
    useContext(TasksContext);
  const taskRef = useRef("");
  const taskColorRef = useRef("#f5f5f5");

  const notifySuccess = () =>
    toast.success("Task Added!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }

  return (
    <>
      <div>
        <h1 className="title">To Do List</h1>
        <div className="input-area">
          <input
            className="tName"
            type="text"
            placeholder="Task Name"
            ref={taskRef}
          />
          <input
            className="color"
            type="color"
            defaultValue="#e7cc53"
            ref={taskColorRef}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (isEmptyOrSpaces(taskRef.current.value)) {
                alert("Can't Add Empty Task");
              } else {
                CreateTask({
                  name: `${taskRef.current.value}`,
                  date: `${GetFormatDate()} , ${GetFormatTime()}`,
                  color: `${taskColorRef.current.value}`,
                });
                taskRef.current.value = "";
                notifySuccess();
              }
            }}
          >
            Add Task
          </button>
        </div>

        {tasks.length !== 0 ? (
          tasks.map((t, i) => <Task key={i} {...t} />)
        ) : (
          <h1 className="no-tasks">
            Greate Job! <br /> You Finished All Your Tasks
          </h1>
        )}
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </>
  );
};
export default Main;

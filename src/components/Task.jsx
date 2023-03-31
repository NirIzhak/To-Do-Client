import React, { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Task = ({ name, date, _id, color }) => {
  const { DeleteTask } = useContext(TasksContext);

  const notifyDelete = () =>
    toast.error("Task Deleted!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  return (
    <div className="task-container">
      <div className="task" style={{ backgroundColor: color }}>
        <div className="text">
          <p className="task-name">{name}</p>
          <p className="task-date">{date}</p>
        </div>
        <button
          onClick={() => {
            DeleteTask(_id);
            notifyDelete();
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};
export default Task;

import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import CompletedList from "./CompletedList";
import ToDoList from "./ToDoList";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const now = new Date();
  function handleCompletion(index) {
    const formattedString = now.toLocaleString("en-IN", {
      date: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    let temp = toDoList[index];
    let beAdded = { todo: temp, timestamp: formattedString };
    let tempList = toDoList.filter((item, ind) => ind !== index);
    console.log(beAdded);
    setCompletedList((prev) => [...prev, beAdded]);
    setToDoList(tempList);
  }

  function handleInput(e) {
    const event = e.target.value;
    setInputVal(e.target.value);
    console.log(event);
  }

  function handleClick() {
    if (inputVal !== "") {
      setToDoList((prev) => [...prev, inputVal]);
      setInputVal("");
      toast("Item Added Successfully", {
        autoClose: 1000,
        position: "top-center",
        hideProgressBar: true,
      });
    } else {
      toast.error("Item to be added is empty. Please enter a valid input", {
        autoClose: "1000",
        position: "top-center",
      });
    }
  }
  return (
    <>
      <header>
        <h1>
          My ToDo List
          <span style={{ margin: "1rem" }}>
            <FontAwesomeIcon icon={faCalendarCheck} size="lg" />
          </span>
        </h1>
      </header>
      <ToastContainer />
      <div className="Input">
        <input
          name="listItem"
          id="listItem"
          value={inputVal}
          type="text"
          style={{
            padding: "0.5rem",
            border: "5px solid #23a861",
            borderRadius: "5px",
            margin: "0.5rem 1rem",
            width: "350px",
            fontSize: "1rem",
          }}
          placeholder="Enter a task"
          autoComplete="off"
          onChange={handleInput}
        />
        <button
          onClick={handleClick}
          style={{
            backgroundColor: "#23a861",
            border: "2px solid #23a861",
            cursor: "pointer",
            fontSize: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "3px",
            color: "#fff",
          }}
        >
          <h4 style={{ fontSize: "1rem", fontWeight: "600" }}>
            Add
            <FontAwesomeIcon
              style={{ margin: "0 1rem" }}
              icon={faCirclePlus}
              size="2xl"
              color="#fff"
            ></FontAwesomeIcon>
          </h4>
        </button>
      </div>
      <div className="toDoContainer">
        <ToDoList todo={toDoList} handleCompletion={handleCompletion} />
        <CompletedList completedList={completedList} />
      </div>
    </>
  );
}

export default App;

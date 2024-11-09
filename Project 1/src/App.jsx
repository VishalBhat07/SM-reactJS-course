import { useEffect, useState } from "react";
import "./App.css";
import { TodoItem } from "./components/todo-item/todo-item";
import TodoDetails from "./components/todo-details/todo-details";
import { Skeleton } from "@mui/material";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const APIresponse = await fetch("https://dummyjson.com/todos");
      const result = await APIresponse.json();

      if (result?.todos && result.todos.length > 0) {
        setLoading(false);
        setTodoList(result?.todos);
        setErrMsg("");
      } else {
        setLoading(true);
        setErrMsg("Error getting API response");
        setTodoList([]);
      }
    } catch (e) {
      console.log(e);
      setErrMsg("Some error occured");
    }
  };

  const fetchCurrentTodoDetails = async (todoId) => {
    try {
      const APIresponse = await fetch(`https://dummyjson.com/todos/${todoId}`);
      const details = await APIresponse.json();
      console.log(details.todo);

      if (details) {
        setTodoDetails(details);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading)
    return <Skeleton variant="rectangular" width={650} height={650} />;

  return (
    <>
      <div className="container">
        <h1 className="title">Simple Todo list App using Material UI</h1>
        <div className="todo-list">
          {todoList && todoList.length > 0
            ? todoList.map((singleItem) => {
                return (
                  <TodoItem
                    fetchCurrentTodoDetails={fetchCurrentTodoDetails}
                    todo={singleItem}
                  />
                );
              })
            : null}
        </div>
        <TodoDetails
          TodoDetails={todoDetails}
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          setTodoDetails={setTodoDetails}
        />
      </div>
    </>
  );
}

export default App;

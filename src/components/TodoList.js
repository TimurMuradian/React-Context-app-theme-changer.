import { useEffect, useState, useContext } from "react";
import ThemeContext from "../context/Theme/ThemeContext";
import axios from "../helpers/axios";

const TodoList = () => {

  const [todos, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    axios.get("/todos").then((data) => {
      setTodos(data);
      setLoading(false);
    });
  }, []);

  const handleDelete = (id) => () => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={theme}>
      <ul className="list">
        {todos.map(({ id, title }) => (
          <li
            className={theme === "dark" ? "dark-list-item" : "list-item"}
            key={id}
          >
            <p>{title.toUpperCase()}</p>
            <button
              className={theme === "dark" ? "dark-list-btn" : "list-btn"}
              onClick={handleDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

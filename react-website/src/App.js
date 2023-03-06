import { useState } from "react";

export default function App() {
  const [activity, setActifity] = useState("");
  const [edit, setEdit] = useState({});
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState([]);

  function generateId() {
    return Date.now();
  }

  function saveTodoHandler(event) {
    event.preventDefault();

    if (!activity) {
      return setMessage("Isi dong bro!");
    }

    setMessage("");

    if (edit.id) {
      const updateTodo = {
        ...edit,
        activity,
      };

      const editTodoIndex = todos.findIndex((todo) => {
        return todo.id === edit.id;
      });

      const updateTodos = [...todos];

      updateTodos[editTodoIndex] = updateTodo;

      setTodos(updateTodos);

      return cancelEditHandler();
    }

    setTodos([
      ...todos,
      {
        id: generateId(),
        activity,
        done: false,
      },
    ]);

    setActifity("");
  }

  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(filteredTodos);

    if (edit.id) cancelEditHandler();
  }

  function editTodoHandler(todo) {
    setActifity(todo.activity);

    setEdit(todo);
  }

  function cancelEditHandler() {
    setEdit({});
    setActifity("");
  }

  function doneTodoHandler(todo) {
    const updateTodo = {
      ...todo,
      done: todo.done ? false : true,
    };

    const editTodoIndex = todos.findIndex((currentTodo) => {
      return currentTodo.id === todo.id;
    });

    const updateTodos = [...todos];

    updateTodos[editTodoIndex] = updateTodo;

    setTodos(updateTodos);
  }

  return (
    <div>
      <h1>Simple Todo List</h1>
      {message && <div style={{ color: "red" }}>{message}</div>}
      <form onSubmit={saveTodoHandler}>
        <input
          type="text"
          placeholder="Nama aktifitas"
          value={activity}
          onChange={(event) => {
            setActifity(event.target.value);
          }}
        />
        <button type="submit">{edit.id ? "Simpan Perubahan" : "Tambah"}</button>
        {edit.id && <button onClick={cancelEditHandler}>Batal Edit</button>}
      </form>

      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={doneTodoHandler.bind(this, todo)}
                />
                {todo.activity}({todo.done ? "Selesai" : "Belum selesai"})
                <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                <button onClick={removeTodoHandler.bind(this, todo.id)}>
                  Hapus
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i>"Todo kosong!"</i>
        </p>
      )}
    </div>
  );
}

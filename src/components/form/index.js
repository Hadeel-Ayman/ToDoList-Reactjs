import React, { useEffect, useRef, useState } from "react";
import cross from "../../assets/images/cancel.png";
import "./style.css";

// add Todo to localStorage
const saveData = () => {
  const local = localStorage.getItem("value");
  if (local) {
    return JSON.parse(localStorage.getItem("value"));
  } else {
    return [];
  }
};

const Form = () => {
  const [list, setList] = useState(saveData());
  const [input, setInput] = useState("");
  const inputRef = useRef();

  // add To Todo
  const addOneTodo = (todo) => {
    const newTodo = {
      id: Math.random() * 10,
      todo: todo,
    };

    if (input.length === 0) {
      alert("please enter the note");
    } else {
      setList([...list, newTodo]);

      setInput("");
    }
  };

  // delete From Todo
  const deleteFromTodo = (id) => {
    const deleteItem = list.filter((item) => item.id !== id);
    setList(deleteItem);
  };

  useEffect(() => {
    inputRef.current.focus();
    localStorage.setItem("value", JSON.stringify(list));
  });

  return (
    <div className="container">
      <input
        type={"text"}
        placeholder="add notes"
        value={input}
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addOneTodo(input)}>Add note</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.todo}
            <>
              <img src={cross} alt="" onClick={() => deleteFromTodo(item.id)} />
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;

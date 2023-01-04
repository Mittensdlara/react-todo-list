import { React, useState } from "react";
import "./ToDoList.css";

 const ToDoList = () => {
//     let todos = {
//         today: [
//             {
//                 id: 0,
//                 title: "First todo (today)",
//                 date: new Date("2022/11/16 21:29"),
//                 today: today,
//             },
//             {
//                 id: 1,
//                 title: "Second todo (today)",
//                 date: new Date("1997/06/14 9:18"),
//                 today: today,
//             },
//             {
//                 id: 2,
//                 title: "Third todo (today)",
//                 date: new Date("2006/08/03 16:44"),
//                 today: today,
//             },
//         ],
//         important: [
//             {
//                 id: 0,
//                 title: "First todo (important)",
//                 date: new Date("2022/11/16 21:29"),
//             },
//             {
//                 id: 1,
//                 title: "Second todo (important)",
//                 date: new Date("1997/06/14 9:18"),
//             },
//             {
//                 id: 2,
//                 title: "Third todo (important)",
//                 date: new Date("2006/08/03 16:44"),
//             },
//         ],
//     };

    const [listToday, setListToday] = useState([]);
    const [listImportant, setListImportant] = useState([]);
    const [input, setInput] = useState("");
    const [tab, setTab] = useState('TODAY');

    const addTodoT = (todo) => {
        const newTodoT = {
            id: Math.random(),
            todo: todo,
            date: new Date(),
        };
        setListToday([...listToday, newTodoT]);
        setInput("");
      };

      const addTodoI = (todo) => {
        const newTodoI = {
          id: Math.random(),
          todo: todo,
          date: new Date(),
      };
        setListImportant([...listImportant, newTodoI]);
        setInput("");
    };
    const deleteTodo = (id) => {
        const newListT = listToday.filter((todo) => todo.id !== id);
        setListToday(newListT);
        const newListI = listImportant.filter((todo) => todo.id !== id);
        setListImportant(newListI);

    };

    // const handleChange = () => (preveText) => setInput(preveText.target.value)

    return (
        <div id="app">
            <div className="panel-container">
                <div className="tabs-container">
                    <button
                        onClick={() => setTab("TODAY")}
                        className={`${tab === 'TODAY' ? 'tab btn btn-primary-ghost active' : 'tab btn btn-primary-ghosts'}`}
                    >
                        Today
                    </button>
                    <button
                      
                        id="tab-important"
                        onClick={() => setTab("IMPORTANT")}
                         className={`${tab === 'IMPORTANT' ? 'tab btn btn-primary-ghost active' : 'tab btn btn-primary-ghosts'}`}
                    >
                        Important
                    </button>
                </div>
                <div className="todo-panel-container">
                    <div id="todo-items-list" className="todo-items-container">
                        {tab === "TODAY" ? 
                            listToday.map((todo) => (
                                <li className="todo-items-list" key={todo.id}>
                                    {todo.todo}
                                    <button
                                        className="btn-danger btn-lg btn"
                                        onClick={() => deleteTodo(todo.id)}
                                    >
                                        Delete
                                    </button>
                                </li>
                            )) : 
                              listImportant.map((todo) => (
                                  <li className="todo-items-list" key={todo.id}>
                                      {todo.todo}
                                      <button
                                          className="btn-danger btn-lg btn"
                                          onClick={() => deleteTodo(todo.id)}
                                      >
                                          Delete
                                      </button>
                                  </li>
                              ))
                              }
                          
                          

                        <span className="todo-date"></span>
                    </div>
                    <div id="add-todo-form">
                        <input
                            id="add-todo-input"
                            placeholder="Add todo"
                            type="text"
                            value={input}
                            onChange={(preveText) =>
                                setInput(preveText.target.value)
                            }
                        />
                        <button
                            id="add-todo-btn"
                            className="btn btn-primary-solid rounded-full"
                            onClick={tab === "TODAY" ? () => addTodoT(input) : () => addTodoI(input)}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

  };

export default ToDoList;
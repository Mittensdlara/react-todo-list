import { React, useState }from 'react'
import './ToDoList.css'

const ToDoList = () => {

  
  // let todos = {
  //   today: [
  //     {
  //       id: 0,
  //       title: "First todo (today)",
  //       date: new Date("2022/11/16 21:29"),
  //       today: today,
  //     },
  //     {
  //       id: 1,
  //       title: "Second todo (today)",
  //       date: new Date("1997/06/14 9:18"),
  //       today: today,
  //     },
  //     {
  //       id: 2,
  //       title: "Third todo (today)",
  //       date: new Date("2006/08/03 16:44"),
  //       today: today,
  //     }
  //   ],
  //   important: [
  //     {
  //       id: 0,
  //       title: "First todo (important)",
  //       date: new Date("2022/11/16 21:29")
  //     },
  //     {
  //       id: 1,
  //       title: "Second todo (important)",
  //       date: new Date("1997/06/14 9:18")
  //     },
  //     {
  //       id: 2,
  //       title: "Third todo (important)",
  //       date: new Date("2006/08/03 16:44")
  //     }
  //   ]
  // };

 const [list, setList] = useState([]);
 const [input, setInput] = useState("");
 const [tab, setTab] = useState("Today")
 
const addTodo = (todo) => {
  const newTodo = {
    id: Math.random(),
    todo: todo,
  };

  setList([...list, newTodo]);

  setInput("");

};

const deleteTodo = (id) => {
   const newList = list.filter((todo) => todo.id !== id);

   setList(newList);
}

// const handleChange = () => (preveText) => setInput(preveText.target.value)


 

  return (
    
        <div id="app">
      <div class="panel-container">
        <div class="tabs-container">
          <button class="tab btn btn-primary-ghost active" >
            Today
          </button>
          <button class="tab btn" id="tab-important">Important</button>
        </div>
        <div class="todo-panel-container">
          <div id="todo-items-list" class="todo-items-container"> 

            {list.map((todo) => (
              <li className='todo-items-list' key={todo.id}>
                {todo.todo}
                 
                <button className='btn-danger btn-lg btn' 
                onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
                
              </li>
    
            ))}
          </div>
          <div id="add-todo-form">
            <input id="add-todo-input"
             placeholder="Add todo"
              type="text" 
              value={input} 
              onChange={(preveText) => setInput(preveText.target.value)}
              />
            <button
              id="add-todo-btn"
              class="btn btn-primary-solid rounded-full"
              onClick={() => addTodo(input)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )}  

  export default ToDoList

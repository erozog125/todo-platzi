import './App.css'

const todos = [
  {text:"Preparar desayuno", completed: false},
  {text:"Asear el cuarto", completed: false},
  {text:"Realizar curso", completed: false},
];

function App() {
  
  return (
    <>
      {/* <TodoCounter /> */}
      <h2>Has completado tantas tareas</h2>
      {/* <TodoSearch /> */}
      <input type="text" placeholder='filtrar tareas' />
      {/* <TodoList>
        {
          todos.map( todo => <TodoItem text={todo.text} completed={todo.completed} /> )
        }         */}
      {/* </TodoList> */}
      {/* <CreateTodoButton /> */}
      <button>+</button>
    </>
  )
}

export default App

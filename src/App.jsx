import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';



const todos = [
  {text:"Preparar desayuno", completed: false},
  {text:"Asear el cuarto", completed: false},
  {text:"Realizar curso", completed: false},
];

function App() {
  
  return (
    <>
      <TodoCounter />
      <h2>Has completado tantas tareas</h2>
      <TodoSearch />
      
      <TodoList>
        {
          todos.map( todo => <TodoItem text={todo.text} completed={todo.completed} /> )
        }         
      </TodoList>
      <CreateTodoButton />      
    </>
  )
}

export default App

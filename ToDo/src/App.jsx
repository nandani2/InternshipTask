import { useEffect } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import { useSelector,} from 'react-redux'
import Todos from './components/Todos'



function App() {

  const todos = useSelector(state => state.todos)

  return (
    <>
      <div className='bg-slate-400 p-4 items-center rounded-lg mb-4'>
        <h1 className='text-black text-xl font-bold'>Learn About Redux Toolkit</h1>
        <AddTodo />
        <ul className='list-none' >
          {todos.map((todo) => (
            <Todos key={todo.id} todo = {todo}/>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App

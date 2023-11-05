import { useState, useEffect } from 'react'
import './App.css'
import { InputBox, TodoItems } from './Components/index.js'
import { TodoProvider } from './Context/TodoContext.jsx'

function App() {
  const [todos, setTodo] = useState([]);
  // create a new todo which present at first postion and copy all at back
  function addTodo(todo) {
    setTodo((prev) => [{ id: Date.now(), todo }, ...prev])
  }

  function updateTodo(id, todo) {
    setTodo(prev => {
      return prev.map(prevTodo => {
        if (prevTodo.id === id) {
          // Update the 'data' property for the matching 'id'
          return { ...prevTodo, data: todo };
        } else {
          return prevTodo; // Return the original object if ID doesn't match
        }
      });
    });
  }

  function deleteTodo(id) {
    setTodo((prev) => prev.filter(todo => todo.id !== id))
  }

  function markTodo(id) {
    // settodo have all todo which have stored previously so we can access
    setTodo(todo => {
      return todo.map((prevTodo) => {
        return prevTodo.id === id ? { ...prevTodo, isCompleted: !prevTodo.isCompleted } : (prevTodo)
      })
    })
  }

  useEffect(() => {
    const prevTodos = JSON.parse(localStorage.getItem("todosData"))

    if (prevTodos && prevTodos.length > 0) {
      setTodo(prevTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todosData", JSON.stringify(todos))
  }, [todos])




  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, markTodo }}>
      <div>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-white text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              <InputBox></InputBox>
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div key={todo.id}
                  className='w-full'
                >
                  <TodoItems todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App

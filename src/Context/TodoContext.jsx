import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [     // array of todos
        {
            id: 0, data: "", isCompleted: false
        }
    ],
    //functions which are useful
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todo) => { },
    markTodo: (id) => { }
})

export const useTodo = () => {
    return useContext(TodoContext)  // passed the usecontext function and variables which are stored in useTodo
}

export const TodoProvider = TodoContext.Provider
import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext';
function InputBox() {
    const { addTodo } = useTodo();
    const [data, setData] = useState("");
    function add(e) {
        e.preventDefault();
        if (!data) return
        addTodo({ data, isCompleted: false })
        setData("")
    }

    return (
        <div>
            <form className="flex" onSubmit={add}>
                <input
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    type="text"
                    placeholder="Write Todo..."
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                />
                <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                    Add
                </button>
            </form>
        </div>
    )
}

export default InputBox
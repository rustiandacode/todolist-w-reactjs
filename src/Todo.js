import React, { useState } from 'react'

export default function Todo() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleTodo = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let tempList = todoList
    if (todo !== '') {
      tempList.push(todo)
      setTodoList(tempList)
      setTodo('')
    }
  }

  return (
    <div className="container pt-20 pb-20 mx-auto">
      <div className="w-96 mx-auto bg-slate-900 text-white py-10 px-8 rounded-xl">
        <h3 className="text-2xl font-bold text-center mb-8">Todo App</h3>
        <form onSubmit={handleSubmit}>
          <div className="w-full flex mb-8">
            <input
              className="w-full rounded-lg text-sm font-semibold text-slate-900 px-5 py-1"
              type="text"
              placeholder="Enter your list here"
              value={todo}
              onChange={handleTodo}
              autoFocus
            />
            <button className="px-5 py-1 bg-sky-500 font-semibold rounded-lg ml-3">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="w-96 mx-auto bg-slate-900 text-white py-10 px-8 rounded-xl mt-8">
        <h4 className="text-md font-semibold">Your List Here :</h4>
        <ul className="mt-5 px-8">
          {todoList.map((list, index) => (
            <li className="list-disc mb-2" key={index}>
              {list}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

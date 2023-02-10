import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'

export default function TodoList() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])
  const [tempIndex, setTempIndex] = useState('')
  const [updateData, setUpdateData] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let tempList = todoList
    if (todo !== '') {
      tempList.push(todo)
      setTodoList(todoList)
      setTodo('')
    }
  }

  const deleteItem = (listItem) => {
    const newTodoList = todoList.filter((todo) => todo !== listItem)
    setTodoList(newTodoList)
  }

  const HandleTempDataAndIndex = (list, index) => {
    setTempIndex(index)
  }

  const handleSubmitEdit = (e) => {
    e.preventDefault()
    if (updateData !== '') {
      todoList[tempIndex] = updateData
      setUpdateData('')
    }
    setTempIndex(null)
  }

  return (
    <div className="container mx-auto text-white">
      <div className="w-72 sm:w-1/3 mx-auto bg-slate-900 p-8 rounded-xl mt-20">
        <h3 className="text-2xl font-bold text-center">Add Your To Do List</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-8 mb-5 md:flex justify-between items-center gap-2">
            <input
              className="rounded-lg w-full px-4 py-2 text-md font-semibold text-slate-900"
              type="text"
              placeholder="Enter your task here"
              autoFocus
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value)
              }}
            />
            <button className="w-full lg:w-fit gradient-blue px-4 py-2 text-md font-semibold mt-2 lg:mt-0 rounded-lg ">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="w-72 sm:w-1/3 mx-auto bg-slate-900 p-8 rounded-xl mt-5">
        <h3 className="text-lg font-semibold">Your To Do List :</h3>
        <ul>
          {todoList.map((list, index) => (
            <li
              className={`px-4 py-2 rounded-lg mt-3 font-semibold flex justify-between items-start relative ${
                index % 2 === 0 ? 'gradient-blue' : 'gradient-purple'
              }`}
              key={index}
            >
              <div
                className="flex gap-1
              "
              >
                <span className="mr-2">{index + 1}. </span>
                <p>{list}</p>
              </div>
              <div
                className={`absolute ${
                  tempIndex === index ? 'block' : 'hidden'
                }`}
              >
                <form onSubmit={handleSubmitEdit}>
                  <input
                    className="w-40 mr-2 rounded-md text-slate-900 text-md px-3 placeholder:text-sm placeholder:font-bold"
                    type="text"
                    placeholder="Edit here..."
                    onChange={(e) => {
                      setUpdateData(e.target.value)
                      console.log(updateData)
                    }}
                  />
                  <button className="bg-white text-sky-500 px-1 py-[2px] text-sm font-bold rounded-md">
                    Done
                  </button>
                </form>
              </div>

              <div className="flex items-center">
                <span
                  className="text-sky-500 bg-white p-1 rounded-md cursor-pointer mr-2"
                  onClick={() => HandleTempDataAndIndex(list, index)}
                >
                  <AiFillEdit />
                </span>
                <span
                  className="text-sky-500 bg-white p-1 rounded-md cursor-pointer"
                  onClick={() => deleteItem(list)}
                >
                  <MdDelete />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

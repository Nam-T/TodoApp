import React, { useState } from 'react'
import data from './data'

//components
import Header from '../components/Header/Header'
import ToDoList from '../components/ToDoList/ToDoList'
import ToDoForm from '../components/ToDoList/TodoForm'

const ScreensRoot = () => {
  const [toDoList, setToDoList] = useState(data)
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task }
    })
    setToDoList(mapped)
  }
  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete
    })
    setToDoList(filtered)
  }
  const addTask = (userInput) => {
    let copy = [...toDoList]
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ]
    setToDoList(copy)
  }

  return (
    <div className="App">
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      <ToDoForm addTask={addTask} />
    </div>
  )
}

export default ScreensRoot

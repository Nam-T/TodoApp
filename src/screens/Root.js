import React, { useState } from 'react'
import data from './data'

//components
import Header from '../components/Header/Header'
import ToDoList from '../components/ToDoList/ToDoList'

const ScreensRoot = () => {
  const [toDoList] = useState(data)
  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} />
    </div>
  )
}

export default ScreensRoot

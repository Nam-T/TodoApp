import React, { useState } from 'react'

import styled from 'styled-components'

const TodoFormTag = styled.form`
  display: flex;
  justify-content: center;
`

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState('')

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput('')
  }
  return (
    <TodoFormTag onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <button>Submit</button>
    </TodoFormTag>
  )
}

export default ToDoForm

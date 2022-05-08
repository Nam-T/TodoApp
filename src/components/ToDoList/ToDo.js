import React from 'react'

import styled from 'styled-components'

const TodoTag = styled.div`
  cursor: pointer;
  .strike {
    text-decoration: line-through;
  }
`

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }

  return (
    <TodoTag>
      <div
        id={todo.id}
        key={todo.id + todo.task}
        name="todo"
        value={todo.id}
        onClick={handleClick}
        className={todo.complete ? 'todo strike' : 'todo'}
      >
        {todo.task}
      </div>
    </TodoTag>
  )
}

export default ToDo

import React from 'react'
import ToDo from './ToDo'

import styled from 'styled-components'

const TodoListTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <TodoListTag>
      <div>
        {toDoList.map((todo) => {
          return (
            <ToDo
              todo={todo}
              handleToggle={handleToggle}
              handleFilter={handleFilter}
            />
          )
        })}
      </div>
      <button style={{ margin: '20px' }} onClick={handleFilter}>
        Clear Completed
      </button>
    </TodoListTag>
  )
}

export default ToDoList

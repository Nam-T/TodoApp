import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

const HeaderTag = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-bottom: 1px solid transparent;

  h1 {
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    padding: 0;
    display: -webkit-box;

    small {
      color: grey;
      margin-left: 6px;
      font-size: 12px;
      font-weight: 400;
    }
  }
`

const Header = () => {
  const [dateState, setDateState] = useState(new Date())

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000)
  }, [])

  return (
    <HeaderTag>
      <h1>
        <span className="simple-content">Today</span>
        <small>
          {dateState.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </small>
      </h1>
    </HeaderTag>
  )
}

export default Header

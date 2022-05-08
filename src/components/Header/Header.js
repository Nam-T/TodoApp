import React from 'react'

import styled from 'styled-components'

const HeaderTag = styled.header`
  display: flex;
  justify-content: center;
`

const Header = () => {
  return (
    <HeaderTag>
      <h1>To Do List</h1>
    </HeaderTag>
  )
}

export default Header

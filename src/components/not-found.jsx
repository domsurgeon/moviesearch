import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`

const NotFound = () => (
  <Wrapper>
    <p>404 NOT FOUND :(</p>
  </Wrapper>
)

export default NotFound

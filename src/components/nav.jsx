import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd'

const Home = styled.a`
  align-self: center;
  display: flex;
  height: 64px;
`

const Left = styled.div`
  display: flex;
`

const Right = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
`

const Wrapper = styled.div`
  display: flex;
  height: 64px;
  justify-content: space-between;
`

const Nav = props => {
  return (
    <Wrapper>
      <Left>
        <Home href='/movies/'>
          <h1>MovieSearch</h1>
        </Home>
      </Left>
      <Right>
        <Input.Search
          allowClear
          loading={props.searching}
          onChange={event => props.search(event.currentTarget.value)}
          placeholder='Search'
          style={{ width: 300 }}
        />
      </Right>
    </Wrapper>
  )
}
export default Nav

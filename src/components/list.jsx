import React from 'react'
import styled from 'styled-components'
import { Table } from 'antd'
import { useSelector } from 'react-redux'

const Poster = styled.div`
  background-color: black;
  padding: 1px;
`

const columns = [
  {
    dataIndex: 'title',
    render: (text, record, index) => (
      <>
        {(record.poster_path || record.backdrop_path) && (
          <Poster>
            <img
              src={`http://image.tmdb.org/t/p/w185/${record.poster_path ||
                record.backdrop_path}`}
              style={{ width: 120 }}
            />
          </Poster>
        )}
        <p>{text}</p>
      </>
    ),
    title: 'Title',
    width: 154
  },
  {
    dataIndex: 'overview',
    title: 'Overview'
  },
  {
    align: 'center',
    dataIndex: 'vote_average',
    title: 'Vote Average',
    width: 120
  }
]

const List = () => {
  const listStore = useSelector(state => state.list)
  const moviesStore = useSelector(state => state.movies)

  return (
    <>
      <style>
        {`
          .ant-table-cell {
            vertical-align: top;
          }
        `}
      </style>
      <Table
        columns={columns}
        dataSource={moviesStore.filter(movie => listStore.includes(movie.id))}
        rowKey='id'
        scroll={{ y: window.innerHeight - 253 }}
      />
    </>
  )
}

export default List

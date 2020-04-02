import React from 'react'
import styled from 'styled-components'
import { Table } from 'antd'
import { useSelector } from 'react-redux'
import manifest from 'moviesearch/manifest'

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
              src={`${manifest.imagesBaseUrl}${record.poster_path ||
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
    title: 'Overview',
    render: (text, record) => (
      <>
        <p>{text}</p>
        <a href={`/movies/${record.id}`}>View more</a>
      </>
    )
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
            font-size: 18px;
            font-weight: 700;

          }
          .ant-table-cell:last-child{
            font-size: 34px;
          }
          .ant-table{
            max-width: 900px;
            width: 90%;
            margin: auto;
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

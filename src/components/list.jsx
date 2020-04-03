import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Table } from 'antd'

import { Link } from 'moviesearch/components'
import manifest from 'moviesearch/manifest'

const Poster = styled.div`
  background-color: black;
  padding: 1px;
`

const columns = [
  {
    dataIndex: 'poster_path',
    render: (text, record) => (
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
        <h3>{ record.title }</h3>
        <p>{ text }</p>
        <Link href={ `/movies/${ record.id }` }>View more</Link>
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

  return (
    <>
      <style>
        {`
          .ant-table-cell {
            vertical-align: top;
            font-size: 18px;
            font-weight: 700;

          }
          .ant-table-cell p{
            font-weight: 500;
          }
          .ant-table-cell:last-child{
            font-size: 34px;
          }
          .ant-table{
            max-width: 900px;
            width: 90%;
            margin: 80px auto -50px;
          }
          .ant-table-pagination.ant-pagination{
            margin-right: 30px;
          }
        `}
      </style>
      <Table
        columns={ columns }
        dataSource={ listStore }
        rowKey='id'
        scroll={{ y: window.innerHeight - 253 }}
      />
    </>
  )
}

export default List

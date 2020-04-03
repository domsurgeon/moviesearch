import React, { useEffect, useState } from 'react'
import { debounce } from 'lodash'
import { Layout } from 'antd'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { addMovies } from 'moviesearch/store/movies'
import { Details, Footer, List, Nav } from 'moviesearch/components'
import { updateList } from 'moviesearch/store/list'
import { useApi } from 'moviesearch/hooks'

const Movies = () => {
  const api = useApi()
  const dispatch = useDispatch()
  const { id } = useParams()

  const [searching, setSearching] = useState(false)
  const [term, setTerm] = useState('')

  useEffect(() => {
    const fetch = async () => {
      const movies = term.length ? await api.search(term) : await api.popular()
      dispatch(addMovies(movies))
      dispatch(updateList(movies.map(movie => movie.id)))
      setSearching(false)
    }
    fetch()
  }, [term])

  const search = debounce(value => {
    if (value.length >= 3) {
      setSearching(true)
      setTerm(value)
    } else if (!value.length) {
      setSearching(false)
      setTerm('')
    }
  }, 300)

  return (
    <Layout>
      <Layout.Header
        style={{
          backgroundColor: '#d6deff',
          boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.2)',
          position: 'fixed',
          width: '100%',
          zIndex: 1
        }}
      >
        <Nav search={search} searching={searching} />
      </Layout.Header>
      <Layout.Content>
        {id && !term ? <Details id={id} /> : <List />}
      </Layout.Content>
      <Layout.Footer
        style={{
          backgroundColor: '#d6deff',
          bottom: 0,
          position: 'fixed',
          textAlign: 'center',
          width: '100%',
          zIndex: 1
        }}
      >
        <Footer />
      </Layout.Footer>
    </Layout>
  )
}

export default Movies

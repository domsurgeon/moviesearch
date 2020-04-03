import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useApi } from 'moviesearch/hooks'
import { Link } from 'moviesearch/components'
import manifest from 'moviesearch/manifest'

const Container = styled.div`
margin: 80px auto 80px;
`
const Content = styled.div`
margin: auto;
max-width: 900px;
background-color: white;
padding: 20px;
width: 90%;
display: grid;
grid-template-columns: 300px 540px;
column-gap: 20px;

h2 {
  font-size: 28px;
}

img {
  width: 300px;
}

`
const Values = styled.div`
  display: grid;
  grid-template-columns: 100px 420px;
  column-gap: 20px;
  margin-bottom: 15px;

  ${props =>
    props.single
      ? `
font-size: 20px;
grid-template-columns: auto;
`
      : ``}
`
const Field = styled.div``
const Value = styled.div`
  font-weight: 700;
  a{
    text-overflow: ellipsis;
    width: 100%;
    display: block;
    position: relative;
    overflow: hidden;
  }
`

const Details = ({ id }) => {
  const [movie, setMovie] = useState()
  const api = useApi()

  useEffect(() => {
    const fetch = async () => {
      const movie = await api.movie(id)
      if (movie.id) {
        setMovie(movie)
      }
    }
    fetch()
  }, [id])

  return movie ? (
    <Container>
      <Content>
        <img
          alt={movie.title}
          src={`${manifest.imagesBaseUrl}${movie.poster_path}`}
        />
        <div>
          <h2>{movie.title}</h2>
          <Values single>
            <Value>{movie.tagline}</Value>
          </Values>
          <Values>
            <Field>Adults</Field>
            <Value>{movie.adult ? 'Yes' : 'No'}</Value>
          </Values>
          <Values>
            <Field>Genres</Field>
            <Value>{movie.genres.map(genre => genre.name).join(', ')}</Value>
          </Values>
          <Values>
            <Field>Overview</Field>
            <Value>{movie.overview}</Value>
          </Values>
          <Values>
            <Field>Release date</Field>
            <Value>{movie.release_date}</Value>
          </Values>
          <Values>
            <Field>Revenue</Field>
            <Value>{`$${new Intl.NumberFormat().format(movie.revenue)}`}</Value>
          </Values>
          <Values>
            <Field>Vote average</Field>
            <Value>
              {movie.vote_average} ({movie.vote_count} votes)
            </Value>
          </Values>
          <Values>
            <Field>Homepage</Field>
            <Value>
              <a href={movie.homepage} target='_blank' rel='noopener noreferrer'>
                {movie.homepage}
              </a>
            </Value>
          </Values>
        </div>
      </Content>
      <p>
        <Link href="/movies/">Go back</Link>
      </p>
    </Container>
  ) : null
}

export default Details

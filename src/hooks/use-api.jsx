import axios from 'axios'

import manifest from 'moviesearch/manifest'

const useApi = () => {
  return {
    popular: async () => {
      let movies = []
      try {
        const response = await axios.get(
          `${manifest.api}/movie/popular?api_key=${manifest.apiKey}`
        )
        movies =
          (response.status === 200 &&
            response.data.results.sort((a, b) =>
              a.popularity < b.popularity ? 1 : -1
            )) ||
          movies
      } catch (error) {
        console.error(error.toString())
      }
      return movies
    },
    search: async term => {
      let movies = []
      try {
        const response = await axios.get(
          `${manifest.api}/search/movie?api_key=${
            manifest.apiKey
          }&query=${encodeURIComponent(term)}`
        )
        movies =
          (response.status === 200 &&
            response.data.results.sort((a, b) =>
              a.vote_average < b.vote_average ? 1 : -1
            )) ||
          movies
      } catch (error) {
        console.error(error.toString())
      }
      return movies
    },
    movie: async id => {
      let movie = {}
      try {
        const response = await axios.get(
          `${manifest.api}/movie/${id}?api_key=${manifest.apiKey}`
        )
        movie = (response.status === 200 && response.data) || movie
      } catch (error) {
        console.error(error.toString())
      }
      return movie
    }
  }
}

export default useApi

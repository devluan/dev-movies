import { useEffect, useState } from 'react'
import { Container, Background } from './styles'
import { getMovieTrailer } from '../../services/getData'

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovieTrailer(movieId))
    }

    getMovies()
  }, [])
  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie[0].key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
          <div>{movieId}</div>
        </Container>
      )}
    </Background>
  )
}
export default Modal

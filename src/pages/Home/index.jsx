import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import { getImages } from '../../utils/getImages'
import { Warppin, Content, Description, Poster, ContentButton } from './styles'
import {
  getMovies,
  getPopularMovies,
  getTopMovies,
  getTopPeople,
  getTopSeries
} from '../../services/getData'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovies] = useState('')
  const [TopMovies, setTopMovies] = useState('')
  const [TopSeries, setTopSeries] = useState('')
  const [popularMovies, setPopularMovies] = useState('')
  const [topPeople, setTopPeople] = useState('')
  const navigate = useNavigate()

  console.log(movie)

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularMovies(),
        getTopPeople()
      ])
        .then(([movie, topMovies, topSeries, popularMovies, topPeople]) => {
          setMovies(movie),
            setTopMovies(topMovies),
            setTopSeries(topSeries),
            setPopularMovies(popularMovies),
            setTopPeople(topPeople)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <Warppin backgroud={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Content>
            <Description>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContentButton>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assistir Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assistir ao Trailer
                </Button>
              </ContentButton>
            </Description>

            <Poster>
              <img alt="capa-cards" src={getImages(movie.poster_path)} />
            </Poster>
          </Content>
        </Warppin>
      )}
      {TopMovies && <Slider info={TopMovies} title={'Top Filmes'} />}
      {TopSeries && <Slider info={TopSeries} title={'Top Séries'} />}
      {popularMovies && (
        <Slider info={popularMovies} title={'Popular Filmes'} />
      )}
      {topPeople && <Slider info={topPeople} title={'Top Artistas'} />}
    </>
  )
}

export default Home

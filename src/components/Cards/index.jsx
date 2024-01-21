import { getImages } from '../../utils/getImages'
import { Container } from './styles'

function Cards({ item }) {
  return (
    <>
      <Container>
        <img
          src={getImages(item.poster_path || item.profile_path || '')}
          alt="cards-top-filmes"
        />
        <h3>{item.title || item.name || ''}</h3>
      </Container>
    </>
  )
}
export default Cards

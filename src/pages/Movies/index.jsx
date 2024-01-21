import { getImages } from '../../utils/getImages'
import { Warppin } from './styles'

function Movies() {
  return (
    <>
      <Warppin background={getImages()}>
        <h1>Movies</h1>
        <p>Essa é a Movies</p>
      </Warppin>
    </>
  )
}

export default Movies

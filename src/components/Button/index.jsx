import { Trailer, Watch } from './styles'

function Button({ children, red, ...rest }) {
  return (
    <>
      {red ? (
        <Watch {...rest}>{children}</Watch>
      ) : (
        <Trailer {...rest}>{children}</Trailer>
      )}
    </>
  )
}
export default Button

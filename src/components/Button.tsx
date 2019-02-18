import styled from 'styled-components'

import Link from './Link'

const Button = styled(Link)({
  textDecoration: 'none',
  fontWeight: 600,
  borderBottom: '2px solid currentColor',
  marginTop: 20,
  display: 'inline-block',
  fontSize: 22,
  color: 'hsl(0, 0%, 0%)',
  lineHeight: 1.4,
  marginLeft: 25,
  position: 'relative',
  '&:hover': {
    borderColor: 'transparent'
  },
  '&:before': {
    content: '"→"',
    display: 'block',
    position: 'absolute',
    left: -25
  }
})

export default Button

import styled from 'styled-components'

import Link from './Link'

const Button = styled(Link)({
  textDecoration: 'none',
  fontWeight: 500,
  textTransform: 'uppercase',
  marginTop: 20,
  letterSpacing: 0.5,
  display: 'inline-block',
  fontSize: 14,
  color: 'hsl(0, 0%, 100%)',
  border: '2px solid currentColor',
  backgroundColor: 'hsl(0, 0%, 10%)',
  lineHeight: 1.4,
  padding: '10px 20px',
  borderRadius: 5
})

export default Button

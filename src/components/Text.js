// @flow
import styled from 'styled-components'

import { PRIMARY_COLOR } from '../constants'

export const textStyles = () => ({
  lineHeight: '1.65em',
  fontSize: '20px',
  margin: '0 0 28px',
  color: 'rgba(0, 0, 0, 0.75)',

  a: {
    color: 'rgba(0, 0, 0, 0.75)',
    borderBottom: `2px solid ${PRIMARY_COLOR}`,
    textDecoration: 'none',

    '&:hover, &:focus': {
      borderColor: 'transparent'
    }
  }
})

const Text = styled.p`
  ${textStyles()};
`

export default Text

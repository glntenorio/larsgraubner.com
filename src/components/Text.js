// @flow
import styled from 'styled-components'

import { TEXT_COLOR, PRIMARY_COLOR } from '../constants'

export const textStyles = () => ({
  lineHeight: '2rem',
  fontSize: '1.1rem',
  margin: '0 0 2rem',
  color: TEXT_COLOR,

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

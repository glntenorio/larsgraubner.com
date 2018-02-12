import React from 'react'
import styled, { css } from 'styled-components'

import { FONT_SANS_SERIF, PRIMARY_COLOR } from '../constants'

const titleStyles = css`
  font-weight: 700;
  font-size: 24px;
  margin: 0 0 0.7em;
  line-height: 32px;
  font-family: ;
  letter-spacing: -0.02em;
  font-family: ${FONT_SANS_SERIF};

  a {
    color: ${PRIMARY_COLOR};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const StyledH1 = styled.h1`
  ${titleStyles};
`

const StyledH2 = styled.h2`
  ${titleStyles};
`

export default ({ singlePost, children }) =>
  singlePost ? <StyledH1>{children}</StyledH1> : <StyledH2>{children}</StyledH2>

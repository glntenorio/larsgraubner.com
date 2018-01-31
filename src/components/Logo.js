// @flow
import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  width: 90px;
  height: 90px;
`

type Props = {
  resolutions: Object
}

const Logo = ({ resolutions }: Props) => (
  <Wrapper>
    <Image resolutions={resolutions} alt="Lars Graubner" />
  </Wrapper>
)

export default Logo

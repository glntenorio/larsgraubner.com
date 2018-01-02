// @flow
import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import Title from '../components/Title'
import Text from '../components/Text'

const LimitedText = Text.extend`
  max-width: 540px;
`

const SubTitle = styled.h2`
  margin: 0 0 2rem;
  font-weight: normal;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.8);
`

const Heading = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8)
  margin: 0 0 2rem;
`

const Index = () => (
  <div>
    <Helmet>
      <title>Hire me - Lars Graubner</title>
    </Helmet>
    <Title>Hi, I{"'"}m Lars</Title>
    <SubTitle>
      A passionate front-end developer based in Lübeck, Germany.
    </SubTitle>
    <LimitedText>
      I{"'"}m focusing on JavaScript and React single page application
      development.
    </LimitedText>
    <Heading>I{"'"}m offering</Heading>
    <ul>
      <li>React Consulting</li>
      <li>Single Page Applications</li>
    </ul>
    <Heading>What customers say</Heading>
  </div>
)

export default Index

export const pageQuery = graphql`
  query HireMeQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`

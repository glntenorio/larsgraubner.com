// @flow
import React from 'react'
import Helmet from 'react-helmet'

import Title from '../components/Title'

const About = () => (
  <div>
    <Helmet>
      <title>Page not found</title>
    </Helmet>
    <Title>About me</Title>
  </div>
)

export default About

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`

// @flow
import React from 'react'
import Helmet from 'react-helmet'

const About = () => (
  <div>
    <Helmet>
      <title>Page not found</title>
    </Helmet>
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

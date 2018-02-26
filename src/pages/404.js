// @flow
import React from 'react'
import Helmet from 'react-helmet'

import Title from '../components/Title'

const Index = () => (
  <div>
    <Helmet>
      <title>Page not found</title>
    </Helmet>
    <Title>Page not found</Title>
  </div>
)

export default Index

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`

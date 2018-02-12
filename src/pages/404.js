// @flow
import React from 'react'
import Helmet from 'react-helmet'

import Title from '../components/Title'
import Text from '../components/Text'

const LimitedText = Text.extend`
  max-width: 540px;
`

const Index = () => (
  <div>
    <Helmet>
      <title>Page not found</title>
    </Helmet>
    <Title>Not found</Title>
    <div>The requested page could not be found</div>
    <LimitedText>
      Please contact the owner of the site that linked you to the original URL
      and let them know their link is broken.
    </LimitedText>
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

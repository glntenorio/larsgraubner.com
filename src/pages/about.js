// @flow
import React from 'react'
import Helmet from 'react-helmet'

import Title from '../components/Title'
import Container from '../components/Container'
import PageContent from '../components/PageContent'

const About = () => (
  <Container>
    <Helmet>
      <title>Page not found</title>
    </Helmet>
    <Title>About me</Title>
    <PageContent>
      <h2>Elsewhere</h2>
      <p>Beside this blog you can find me on the following networks.</p>
      <ul>
        <li>
          <a href="https://twitter.com/larsgraubner">Twitter</a>
        </li>
        <li>
          <a href="https://github.com/lgraubner">Github</a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/2536697/lars-graubner">
            Stackoverflow
          </a>
        </li>
        <li>
          <a href="https://hashnode.com/@larsgraubner">Hashnode</a>
        </li>
        <li>
          <a href="https://dev.to/lgraubner">dev.to</a>
        </li>
        <li>
          <a href="https://www.xing.com/profile/Lars_Graubner2">Xing</a>
        </li>
      </ul>
    </PageContent>
  </Container>
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

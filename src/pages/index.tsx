import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import idx from 'idx'

import Layout from '../components/Layout'
import P from '../components/Paragraph'
import { H2 } from '../components/Heading'
import Link from '../components/Link'
import { Ul, Li } from '../components/List'
import Button from '../components/Button'

const Slogan = styled.div({
  fontSize: 36,
  fontWeight: 400,
  lineHeight: 1.2,
  marginTop: 40,
  marginBottom: '1.5em'
})

const IndexH2 = styled(H2)({
  marginTop: '2.5em'
})

const IndexLink = styled(Link)({
  color: 'hsl(0, 0%, 0%)',
  textDecoration: 'none',
  '&:hover': {
    borderBottom: '1px solid currentColor'
  }
})

const Index = ({ data }: any) => {
  const posts = idx(data, _ => _.allMarkdownRemark.edges) || []

  return (
    <Layout>
      <Helmet>
        <title>Lars Graubner - JavaScript Developer</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="I'm Lars Graubner, a web developer creating Apps with React and React Native. I like JavaScript and clean code. I'm a Husband and father."
        />
      </Helmet>
      <Slogan>
        I'm a JavaScript devel­oper with a passion for well-crafted
        appli­ca­tions.
      </Slogan>
      <P>I love React and Node.js</P>
      <P>
        As designer, devel­oper and en­tre­pre­neur with profes­sional
        experi­ence I bring ideas to life. Most of the time I produce scalable
        and elegant things for web, mobile and desktop.
      </P>
      <IndexH2>What I do</IndexH2>
      <P>
        I bring ideas to life. I help clients to realize projects in a scalable
        way using React, React Native, Node.js, Apollo, TypeScript and more.
      </P>
      <P>
        Interested in working with me? Read more about what I offer and send me
        a message.
      </P>

      <Button to="/blog">Work with me</Button>
      <IndexH2>Writing</IndexH2>
      <P>Occasionally I write down my thoughts. Check out my blog for more.</P>
      <Ul>
        {posts.map((post: any) => (
          <Li>
            <IndexLink to={post.node.fields.slug}>
              {post.node.frontmatter.title}
            </IndexLink>
          </Li>
        ))}
      </Ul>
      <Button to="/blog">All posts</Button>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteTitle
        siteDescription
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

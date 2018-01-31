// @flow
import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Post = styled.div`
  & + div {
    margin-top: 50px;
  }
`

const PostDate = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 15px;
  letter-spacing: -0.02em;
  font-family: 'Lucida Grande', sans-serif;
  margin-bottom: 0.65em;
`

const PostTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  margin: 0 0 20px;
  line-height: 32px;
  font-family: 'Lucida Grande', sans-serif;
  letter-spacing: -0.02em;

  a {
    color: #af403c;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const PostExcerpt = styled.p`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.84);
  line-height: 1.5em;
  margin: 0;
`

type Props = {
  data: Object
}

const Index = ({ data }: Props) => {
  const author = get(data, 'site.siteMetadata.author')
  const siteUrl = get(data, 'site.siteMetadata.siteUrl')

  const description =
    'Front-end developer from germany. Passionate about React and web performance.'

  const posts = get(data, 'allMarkdownRemark.edges')
  return (
    <div>
      <Helmet>
        <title>{`${author} - Front-end developer`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${author} - Front-end developer`} />
        <meta property="og:type" content="website" />

        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content={author} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@larsgraubner" />
        <meta name="twitter:domain" content="larsgraubner.com" />
        <meta
          name="twitter:title"
          content={`${author} – Front-end Developer`}
        />
        <meta name="twitter:description" content={description} />
      </Helmet>
      {posts.map(({ node }) => {
        const title = get(node, 'frontmatter.title')
        const path = get(node, 'frontmatter.path')
        const date = get(node, 'frontmatter.date')
        return (
          <Post key={path}>
            <PostDate>{date}</PostDate>
            <PostTitle>
              <Link to={path}>{title}</Link>
            </PostTitle>
            <PostExcerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </Post>
        )
      })}
    </div>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        author
        siteUrl
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            date(formatString: "MMM DD, YYYY")
            title
          }
          excerpt
        }
      }
    }
  }
`

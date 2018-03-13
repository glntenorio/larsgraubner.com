// @flow
import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import PostExcerpt from '../components/PostExcerpt'
import PostExcerptDate from '../components/PostExcerptDate'
import PostExcerptTitle from '../components/PostExcerptTitle'
import PostExcerptText from '../components/PostExcerptText'

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
        const path = get(node, 'frontmatter.url')
        const date = get(node, 'frontmatter.date')

        return (
          <PostExcerpt key={path}>
            <PostExcerptDate>{date}</PostExcerptDate>
            <PostExcerptTitle>
              <Link to={path}>{title}</Link>
            </PostExcerptTitle>
            <PostExcerptText>{node.excerpt}</PostExcerptText>
          </PostExcerpt>
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
            url
            date(formatString: "MMM DD, YYYY")
            title
          }
          excerpt
        }
      }
    }
  }
`

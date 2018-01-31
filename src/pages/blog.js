// @flow
import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import values from 'lodash/values'

import Title from '../components/Title'

import { BOLD_COLOR, TEXT_COLOR, LIGHT_COLOR } from '../colors'

const BlogTitle = Title.extend`
  margin-bottom: 3rem;
`

const Year = styled.div`
  color: ${LIGHT_COLOR};
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
`

const PostList = styled.ul`
  list-style: none;
  margin: 2rem 0 4rem;
  padding: 0;
`

const PostTitle = styled.li`
  line-height: 25px;
  margin-bottom: 1.5em;

  a {
    color: ${BOLD_COLOR};
    text-decoration: none;
    font-size: 18px;

    @media (min-width: 990px) {
      color: ${TEXT_COLOR};

      &:focus,
      &:hover {
        color: ${BOLD_COLOR};

        + span {
          display: inline;
        }
      }
    }
  }
`

const PostDate = styled.span`
  color: ${LIGHT_COLOR};
  display: block;
  font-size: 14px;

  @media (min-width: 768px) {
    display: inline;
    margin-left: 25px;
  }

  @media (min-width: 990px) {
    display: none;
  }
`

type Props = {
  data: Object,
  location: Object
}

const Blog = ({ data, location }: Props) => {
  const posts = get(data, 'allMarkdownRemark.edges')
  const description = get(data, 'site.siteMetadata.rssFeedDescription')
  const author = get(data, 'site.siteMetadata.author')
  const siteUrl = get(data, 'site.siteMetadata.siteUrl')

  const yearPosts = posts.reduce((obj, p) => {
    if (obj[p.node.frontmatter.year]) {
      obj[p.node.frontmatter.year].push(p)
    } else {
      // eslint-disable-next-line
      obj[p.node.frontmatter.year] = [p]
    }
    return obj
  }, {})

  return (
    <div>
      <Helmet>
        <title>Lars{"'"} Blog</title>
        <meta name="description" content={description} />
        <meta property="og:title" content="Lars' Blog" />
        <meta property="og:type" content="blog" />

        <meta property="og:url" content={siteUrl + location.pathname} />
        <meta property="og:site_name" content={author} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@larsgraubner" />
        <meta name="twitter:domain" content="larsgraubner.com" />
        <meta name="twitter:title" content="Lars' Blog" />
        <meta name="twitter:description" content={description} />
      </Helmet>
      <BlogTitle>Lars{"'"} Blog</BlogTitle>
      {values(yearPosts)
        .reverse()
        .map(year => (
          <PostList key={year[0].node.frontmatter.year}>
            <Year>{year[0].node.frontmatter.year}</Year>
            {year.map(post => {
              const title =
                get(post, 'node.frontmatter.title') || post.node.path
              return (
                <PostTitle key={post.node.frontmatter.path}>
                  <Link to={post.node.frontmatter.path}>{title}</Link>
                  <PostDate>{post.node.frontmatter.date}</PostDate>
                </PostTitle>
              )
            })}
          </PostList>
        ))}
    </div>
  )
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        rssFeedDescription
        author
        siteUrl
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            year: date(formatString: "YYYY")
            title
          }
        }
      }
    }
  }
`

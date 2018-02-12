// @flow
import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import get from 'lodash/get'

import { textStyles } from '../components/Text'
import PostDate from '../components/PostDate'
import PostTitle from '../components/PostTitle'

import { BOLD_COLOR, FONT_SANS_SERIF } from '../constants'

const Wrapper = styled.div`
  max-width: 620px;
  margin: 0 auto 8rem;
`
const PostHeader = styled.header`
  margin-bottom: 0;
`

const Post = styled.article`
  h2 {
    margin: 2rem 0 1.5rem;
    font-size: 1.85rem;
    font-weight: 600;
    line-height: 2.5rem;
    color: ${BOLD_COLOR};
    font-family: ${FONT_SANS_SERIF};
  }

  h3 {
    margin: 2rem 0 1.25rem;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2.5rem;
    color: ${BOLD_COLOR};
    font-family: ${FONT_SANS_SERIF};
  }

  p {
    ${textStyles()};

    code {
      font-size: 90%;
      padding: 0.2em 0.4em;
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 0.25rem;
      color: rgba(0, 0, 0, 0.65);
    }
  }

  .gatsby-highlight {
    margin: 2rem 0 2rem -4%;
    width: 108%;

    pre {
      margin: 0;
      border-radius: 3px;
      padding: 20px 4%;
      font-size: 1rem;
    }
  }

  .gatsby-highlight-code-line {
  }
`

type Props = {
  data: Object,
  location: Object
}

const BlogPostTemplate = ({ data, location }: Props) => {
  const post = data.markdownRemark
  const { description, title, date } = data.markdownRemark.frontmatter
  const author = get(data, 'site.siteMetadata.author')
  const siteUrl = get(data, 'site.siteMetadata.siteUrl')

  return (
    <Wrapper>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name="description" content={post.frontmatter.description} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />

        <meta property="og:url" content={siteUrl + location.pathname} />
        <meta property="og:site_name" content={author} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@larsgraubner" />
        <meta name="twitter:domain" content="larsgraubner.com" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      <Post>
        <PostHeader>
          <PostDate>{date}</PostDate>
          <PostTitle singlePost>{title}</PostTitle>
        </PostHeader>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Post>
    </Wrapper>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        author
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        dateRaw: date
      }
    }
  }
`

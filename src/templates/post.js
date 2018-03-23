// @flow
import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import get from 'lodash/get'

import PostDate from '../components/PostDate'

import {
  FONT_SANS_SERIF,
  PRIMARY_COLOR,
  TITLE_COLOR,
  FONT_BOLD
} from '../constants'

const Wrapper = styled.div``

const PostHeader = styled.header`
  margin-bottom: 0;
`

const PostTitle = styled.h1`
  font-weight: 700;
  font-size: 30px;
  margin-top: 0;
  line-height: 1.3em;
  font-family: ${FONT_BOLD};
  text-transform: uppercase;
  color: ${TITLE_COLOR};

  @media (min-width: 992px) {
    font-size: 54px;
  }
`

const Post = styled.article`
  h2 {
    margin-top: 80px;
    font-size: 26px;
    font-weight: 700;
    line-height: 1.3rem;
    color: ${TITLE_COLOR};
    text-transform: uppercase;
    font-family: ${FONT_BOLD};

    @media (min-width: 992px) {
      font-size: 38px;
    }
  }

  h3 {
    margin: 2rem 0 1.25rem;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2.5rem;
    color: ${TITLE_COLOR};
    font-family: ${FONT_SANS_SERIF};
  }

  p {
    line-height: 1.75em;
    font-size: 19px;
    margin: 0 0 28px;
    color: rgba(0, 0, 0, 0.85);

    @media (min-width: 992px) {
      font-size: 20px;
    }

    a {
      color: rgba(0, 0, 0, 0.75);
      border-bottom: 2px solid ${PRIMARY_COLOR};
      text-decoration: none;

      &:hover,
      &:focus {
        border-color: transparent;
      }
    }

    code {
      font-size: 90%;
      padding: 0.2em 0.4em;
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 3px;
      color: rgba(0, 0, 0, 0.55);
    }
  }

  .gatsby-highlight {
    margin: 2rem 0;

    @media (min-width: 992px) {
      width: 108%;
      margin-left: -4%;
    }

    pre {
      margin: 0;
      border-radius: 3px;
      padding: 20px 4%;
      font-size: 14px;
      line-height: 1.5em;

      @media (min-width: 992px) {
        font-size: 16px;
      }
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
  query BlogPostByPath($url: String!) {
    site {
      siteMetadata {
        author
        siteUrl
      }
    }
    markdownRemark(frontmatter: { url: { eq: $url } }) {
      id
      html
      frontmatter {
        title
        description
        date(formatString: "MMM DD, YYYY")
        dateRaw: date
      }
    }
  }
`

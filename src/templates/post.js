// @flow
import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Title from '../components/Title'

import { textStyles } from '../components/Text'

import { LIGHT_COLOR, BOLD_COLOR, PRIMARY_COLOR } from '../colors'

const Wrapper = styled.div`
  max-width: 620px;
  margin: 0 auto 8rem;
`

const BlogHeader = styled.div`
  margin-bottom: 4rem;

  a {
    color: ${BOLD_COLOR};
    font-weight: 700;
    font-size: 1.7rem;
    text-decoration: none;
    border-bottom: 3px solid ${PRIMARY_COLOR};
  }
`

const PostHeader = styled.header`
  margin-bottom: 2rem;
`

const Post = styled.article`
  h2 {
    margin: 2rem 0 1.5rem;
    font-size: 1.85rem;
    font-weight: 600;
    line-height: 2.5rem;
    color: ${BOLD_COLOR};
  }

  h3 {
    margin: 2rem 0 1.25rem;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2.5rem;
    color: ${BOLD_COLOR};
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

const Date = styled.div`
  font-size: 1.1rem;
  line-height: 1rem;
  margin-bottom: 0.75rem;
  color: ${LIGHT_COLOR};
`

type Props = {
  data: Object
}

const BlogPostTemplate = ({ data }: Props) => {
  const post = data.markdownRemark

  return (
    <Wrapper>
      <Helmet title={post.frontmatter.title} />
      <BlogHeader>
        <Link to="blog">Lars{"'"} Blog</Link>
      </BlogHeader>
      <Post>
        <PostHeader>
          <Date>{post.frontmatter.date}</Date>
          <Title>{post.frontmatter.title}</Title>
        </PostHeader>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Post>
    </Wrapper>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    file(relativePath: { eq: "apple-touch-icon.png" }) {
      childImageSharp {
        resolutions(width: 40, height: 40) {
          ...GatsbyImageSharpResolutions_tracedSVG
        }
      }
    }
  }
`

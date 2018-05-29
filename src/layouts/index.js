// @flow
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

// $FlowFixMe
import 'prism-themes/themes/prism-atom-dark.css'

// eslint-disable-next-line
injectGlobal`
  ${normalize()}

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *, *:after, *:before {
    box-sizing: inherit;
  }

  body {
    font-family: times, serif;
    -webkit-font-smoothing: antialiased;
    color: rgba(0, 0, 0, 0.8);
    margin: 0;
  }
`

const Wrapper = styled.main`
  margin: 8rem;
  max-width: 480px;
`

const Footer = styled.footer`
  margin-top: 80px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    display: inline;
  }

  li:not(:first-child) {
    margin-left: 30px;
  }
`

const Headline = styled.div`
  font-size: 40px;
  font-weight: 300;
  line-height: 1.25em;
  margin: 0 0 1em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  a {
    color: rgba(0, 0, 0, 0.8);
    border-bottom: 2px solid rgba(0, 0, 0, 0.8);
    text-decoration: none;
  }
`

const HeadlineIndex = Headline.withComponent('h1')

type Props = {
  children: Function,
  location: Object
}

const headline = (
  <span>
    Hi I{"'"}m <Link to="/">Lars</Link>.
  </span>
)

const Template = ({ children, location }: Props) => (
  <Wrapper>
    <Helmet>
      <html lang="en" />
      <meta name="robots" content="index,follow" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Helmet>
    {location.pathname === '/' ? (
      <HeadlineIndex>{headline}</HeadlineIndex>
    ) : (
      <Headline>{headline}</Headline>
    )}

    {children()}

    <Footer>
      <ul>
        <li>
          <Link to="/legal-notice">Legal Notice</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy Policy</Link>
        </li>
      </ul>
    </Footer>
  </Wrapper>
)

export default Template

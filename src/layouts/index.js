// @flow
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

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
    font-family: Georgia, serif;
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;*/
    text-rendering: optimizeLegibility;
  }
`

const Wrapper = styled.div`
  width: 850px;
  margin: 10% auto;
`

const Sidebar = styled.header`
  width: 210px;
  float: left;
  text-align: right;
`

const Logo = styled.img`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  filter: grayscale(100%);
`

const Name = styled.div`
  font-family: 'Lucida Grande', sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 10px;

  a {
    color: rgba(0, 0, 0, 0.84);
    text-decoration: none;
  }
`

const Bio = styled.div`
  font-size: 14px;
  line-height: 1.6em;
  color: rgba(0, 0, 0, 0.54);
  font-family: 'Lucida Grande', sans-serif;
`

const Nav = styled.nav`
  margin-top: 30px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline;

    & + li:before {
      content: '·';
      margin: 0 5px;
    }
  }

  a {
    color: rgba(0, 0, 0, 0.54);
    text-decoration: none;
    font-family: 'Lucida Grande', sans-serif;
    letter-spacing: 0.75px;
    font-size: 15px;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Content = styled.main`
  margin-left: 260px;
`

type Props = {
  children: Function,
  location: Object
}

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
      <link
        rel="canonical"
        href={`https://larsgraubner.com${location.pathname.replace(
          /\/?$/,
          '/'
        )}`}
      />
      <link
        href="https://fonts.googleapis.com/css?family=Vollkorn"
        rel="stylesheet"
      />
    </Helmet>
    <Sidebar>
      <Logo src="/lars-180x180.jpg" alt="Lars Graubner" />
      <Name>
        <Link to="/">Lars Graubner</Link>
      </Name>
      <Bio>
        Front-end developer from germany. Passionate about React and web
        performance.
      </Bio>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <a href="https://twitter.com/lgraubner">Twitter</a>
          </li>
        </ul>
      </Nav>
    </Sidebar>
    <Content>{children()}</Content>
  </Wrapper>
)

export default Template

// @flow
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import 'prism-themes/themes/prism-atom-dark.css'

import Logo from '../components/Logo'

import {
  PRIMARY_COLOR,
  TEXT_COLOR,
  FONT_SANS_SERIF,
  LIGHT_COLOR
} from '../constants'

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
    -moz-osx-font-smoothing: grayscale; */
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

const Name = styled.div`
  font-family: ${FONT_SANS_SERIF};
  font-size: 20px;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 10px;

  a {
    color: ${TEXT_COLOR};
    text-decoration: none;
  }
`

const Bio = styled.div`
  font-size: 15px;
  line-height: 1.6em;
  color: ${LIGHT_COLOR};
  font-family: ${FONT_SANS_SERIF};
`

const Nav = styled.nav`
  margin-top: 20px;
  font-family: ${FONT_SANS_SERIF};

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
      color: ${LIGHT_COLOR};
    }
  }

  a {
    color: ${PRIMARY_COLOR};
    text-decoration: none;
    letter-spacing: 1px;
    font-size: 14px;

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

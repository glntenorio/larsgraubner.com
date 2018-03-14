// @flow
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

// $FlowFixMe
import 'prism-themes/themes/prism-base16-ateliersulphurpool.light.css'

import Container from '../components/Container'

import { FONT_SANS_SERIF, FONT_SERIF } from '../constants'

import config from '../../gatsby-config'

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
    font-family: ${FONT_SERIF};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
`

const Sidebar = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background: #181818;
  padding: 60px 40px 40px;
  width: 260px;
  display: flex;
  flex-direction: column;
`

const Logo = styled.div``

const Name = styled.div`
  font-family: ${FONT_SANS_SERIF};
  font-size: 19px;
  font-weight: 600;
  margin: 0 0 0.1em 0;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
  }
`

const NameIndex = Name.withComponent('h1')

const Subline = styled.div`
  font-size: 17px;
  line-height: 1.65em;
  color: rgba(255, 255, 255, 0.5);
  font-family: ${FONT_SANS_SERIF};
  font-weight: 400;
  margin: 0;
`

const Nav = styled.nav`
  font-family: ${FONT_SANS_SERIF};
  margin-top: 100px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li:not(:last-child) {
    margin-bottom: 20px;
  }

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 17px;
    font-weight: 400;

    &:hover {
      border-bottom: 2px solid rgba(255, 255, 255, 0.25);
    }
  }
`

const Social = Nav.extend`
  margin-top: 30px;

  &:before {
    margin-bottom: 30px;
    content: '';
    display: block;
    width: 35px;
    border-top: 3px solid rgba(255, 255, 255, 0.25);
  }
`

const Content = styled.main`
  max-width: 640px;
  margin: 0 auto;
`

type Props = {
  children: Function,
  location: Object
}

const Template = ({ children, location }: Props) => (
  <Container>
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
    <Sidebar>
      <Logo>
        {location.pathname === '/' ? (
          <NameIndex>{config.siteMetadata.author}</NameIndex>
        ) : (
          <Name>
            <Link to="/">{config.siteMetadata.author}</Link>
          </Name>
        )}
        <Subline>{config.siteMetadata.subline}</Subline>
      </Logo>
      <Nav>
        <ul>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">Learn React</Link>
          </li>
        </ul>
      </Nav>
      <Social>
        <ul>
          <li>
            <a href="https://github.com/lgraubner">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/larsgraubner">Twitter</a>
          </li>
        </ul>
      </Social>
    </Sidebar>
    <Content>{children()}</Content>
  </Container>
)

export default Template

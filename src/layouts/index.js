// @flow
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

// $FlowFixMe
import 'prism-themes/themes/prism-base16-ateliersulphurpool.light.css'

import Logo from '../components/Logo'

import {
  PRIMARY_COLOR,
  TEXT_COLOR,
  FONT_SANS_SERIF,
  LIGHT_COLOR,
  FONT_SERIF,
  TITLE_COLOR
} from '../constants'

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

const Wrapper = styled.div`
  width: 90%;
  margin: 40px 5%;

  @media (min-width: 992px) {
    width: 850px;
    margin: 120px auto;
  }
`

const Sidebar = styled.aside`
  text-align: center;
  margin-bottom: 40px;
  max-width: 300px;
  margin: 0 auto 60px;

  @media (min-width: 992px) {
    width: 210px;
    float: left;
    text-align: right;
  }
`

const Name = styled.div`
  font-family: ${FONT_SANS_SERIF};
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 10px;
  color: ${TITLE_COLOR};

  a {
    color: ${TITLE_COLOR};
    text-decoration: none;
  }
`

const NameIndex = Name.withComponent('h1')

const Bio = styled.div`
  font-size: 15px;
  line-height: 1.65em;
  color: rgba(0, 0, 0, 0.6);
  font-family: ${FONT_SANS_SERIF};
  font-weight: 400;
  margin: 0;
`

const BioIndex = Bio.withComponent('h2')

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
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Content = styled.main`
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 992px) {
    margin-left: 260px;
  }
`

type Props = {
  children: Function,
  location: Object
}

const name = 'Lars Graubner'
const info =
  'Front-end developer from Germany. Passionate about React and web performance.'

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
    <Sidebar>
      <Link to="/">
        <Logo src="/lars-180x180.jpg" alt="Lars Graubner" />
      </Link>
      {location.pathname === '/' ? (
        <NameIndex>{name}</NameIndex>
      ) : (
        <Name>
          <Link to="/">{name}</Link>
        </Name>
      )}
      {location.pathname === '/' ? (
        <BioIndex>{info}</BioIndex>
      ) : (
        <Bio>{info}</Bio>
      )}
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

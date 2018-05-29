// @flow
import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Link from '../components/Link'
import P from '../components/Paragraph'
import { Ul, Li } from '../components/List'

type Props = {
  data: Object
}

const Index = ({ data }: Props) => {
  const author = get(data, 'site.siteMetadata.author')
  const siteUrl = get(data, 'site.siteMetadata.siteUrl')

  const description =
    'Front-end developer from germany. Passionate about React and web performance.'
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
      <P>
        I help realizing great ideas in form of websites and apps, mostly
        working with JavaScript.
      </P>

      <P>
        At the moment I{"'"}m building an app with React Native powered by a
        fully fledged API.
      </P>

      <P>
        When I{"'"}m not doing that I{"'"}m spending time with my family or
        binge watch the latest season of{' '}
        <Link href="https://www.imdb.com/title/tt2575988/" nofollow>
          Silicon Valley
        </Link>.
      </P>

      <P>Occasionally I write down my thoughts:</P>
      <Ul />

      <P>You can also find me on a couple other places on the internet.</P>

      <Ul>
        <Li>
          Social: <Link href="https://twitter.com/larsgraubner">Twitter</Link>
        </Li>
        <Li>
          Code:{' '}
          <Link href="https://github.com/lgraubner?tab=repositories">
            Github
          </Link>
        </Li>
        <Li>
          CV:{' '}
          <Link href="https://www.linkedin.com/in/larsgraubner/">LinkedIn</Link>,{' '}
          <Link href="https://www.xing.com/profile/Lars_Graubner2/cv">
            Xing
          </Link>
        </Li>
      </Ul>

      <P>
        If there are any questions left{' '}
        <Link href="mailto:hello@larsgraubner.com">
          drop me a line via email
        </Link>, but please don{"'"}t take an answer for granted.
      </P>

      <P>
        PS: Want to work with me? At the moment I{"'"}m not interested in any
        fulltime job offers. If you have a smaller project though shoot me a
        message.
      </P>
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
    file(relativePath: { eq: "lars-180x180.jpg" }) {
      childImageSharp {
        resolutions(width: 90, height: 90, quality: 90) {
          ...GatsbyImageSharpResolutions_tracedSVG
        }
      }
    }
  }
`
